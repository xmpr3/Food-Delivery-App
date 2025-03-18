import React from "react";
import { CDN_URL, MENU_API } from "../utils/constant.jsx";

const MenuItem = ({ recommendedMenu }) => {
	return (
		<ul>
			{recommendedMenu?.card?.card?.itemCards.map((res, index) => (
				<li key={index} className="">
					<hr className="text-gray-300 my-3" />
					<div className="flex justify-between">
						<div>
							<h5 className="text-red-400">
								{res?.card?.info?.isBestseller &&
									"BestSeller"}{" "}
							</h5>
							<h3 className="text-[18px] font-bold">
								{res?.card?.info?.name}
							</h3>
							<h5 className="font-bold">
								₹
								{(res?.card?.info?.price ??
									res?.card?.info?.defaultPrice ??
									0) / 100}
							</h5>
							{res?.card?.info?.ratings?.aggregatedRating
								?.rating && (
								<h5 className="font-semibold">
									⭐
									{
										res?.card?.info?.ratings
											?.aggregatedRating?.rating
									}{" "}
									(
									{
										res?.card?.info?.ratings
											?.aggregatedRating?.ratingCountV2
									}
									)
								</h5>
							)}
							<p className="font-sans text-gray-500">
								{res?.card?.info?.description}
							</p>
						</div>
						<img
							src={`${CDN_URL}${res?.card?.info?.imageId}`}
							alt="food"
							height="144"
							width="156"
							className="rounded-2xl"
						/>
					</div>
				</li>
			))}
		</ul>
	);
};

export default MenuItem;
