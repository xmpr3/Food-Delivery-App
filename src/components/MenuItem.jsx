import React from "react";
import { CDN_URL } from "../utils/constant.jsx";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.jsx";

const MenuItem = ({ items }) => {
	const dispatch = useDispatch();
	const handleClick = (res) => {
		dispatch(addItem(res?.card?.info));
	};

	return (
		<ul>
			{items.map((res) => (
				<li key={res?.card?.info?.id} className="">
					<div className="flex justify-between">
						<div className="w-8/12">
							<h5 className="text-red-400">
								{res?.card?.info?.isBestseller && "BestSeller"}
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
						<div className="relative h-fit">
							<button
								className="absolute text-xl ml-12 -bottom-4 p-1 cursor-pointer border border-gray-300 rounded-md bg-white text-green-400 "
								onClick={() => handleClick(res)}
							>
								Add +
							</button>
							<img
								src={`${CDN_URL}${res?.card?.info?.imageId}`}
								alt="food"
								height="144"
								width="156"
								className="rounded-2xl"
							/>
						</div>
					</div>

					<hr className="text-gray-300 my-3" />
				</li>
			))}
		</ul>
	);
};

export default MenuItem;
