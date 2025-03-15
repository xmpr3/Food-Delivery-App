import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
import { CDN_URL, MENU_API } from "../utils/constant.jsx";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
	const [restaurantInfo, setRestaurantInfo] = useState(null);
	const [recommendedMenu, setRecommendedMenu] = useState(null);
	const [offers, setOffers] = useState(null);

	const { resId } = useParams();

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		try {
			const response = await fetch(`${MENU_API}${resId}`);
			const json = await response.json();

			setRestaurantInfo(json?.data?.cards?.[2]?.card?.card?.info);

			// Check if recommended menu exists, otherwise set it to an empty array
			const cards =
				json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
					?.cards || [];

			const recommendedItems =
				cards?.[1]?.card?.card?.itemCards ||
				cards?.[2]?.card?.card?.itemCards ||
				[];

			setRecommendedMenu(recommendedItems ?? []); // If undefined, set it as an empty array

			//Offers
			setOffers(
				json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
					?.offers ?? [],
			);

			console.log(json);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	// Show shimmer loader until restaurant info is available
	if (!restaurantInfo) return <Shimmer />;

	console.log(recommendedMenu);

	return (
		<>
			<div className="Restaurant-Info mx-5">
				<h3 className="text-[28px] font-bold">{restaurantInfo.name}</h3>
				<div className="ResInfo-Box p-3 border border-gray-200 rounded-2xl border">
					<h5 className="text-[16px] font-semibold">
						{restaurantInfo.avgRating}🌟 -{" "}
						{restaurantInfo.costForTwoMessage}
					</h5>
					<h5 className="underline text-[14px] text-orange-500">
						{restaurantInfo.cuisines.join(", ")}
					</h5>
					<h5 className="text-[14px]">
						<b>Outlet</b> - {restaurantInfo.areaName}
					</h5>
					<h5 className="text-[14px]">
						{restaurantInfo.sla.minDeliveryTime} -{" "}
						{restaurantInfo.sla.maxDeliveryTime} min
					</h5>
				</div>
			</div>

			<div className="offers m-5">
				<h3 className="text-[20px] font-semibold">Deals for you</h3>
				<div className="flex ">
					{offers.map((item, index) => (
						<div
							className="border border-gray-300 rounded-3xl p-4 m-3 "
							key={index}
						>
							<h2 className="text-[18px] font-bold">
								{item?.info?.header}
							</h2>
							<h2 className="text-[14px] font-semibold text-gray-500">
								{item?.info?.couponCode || item?.info?.offerTag}
							</h2>
						</div>
					))}
				</div>
			</div>

			{/* Only show recommended menu if it exists */}
			{recommendedMenu.length > 0 ? (
				<div className="Recommended-Menu mx-5">
					<h3 className="text-[18px] font-bold">
						Recommended ({recommendedMenu.length})
					</h3>
					<ul>
						{recommendedMenu.map((res, index) => (
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
										{res?.card?.info?.ratings
											?.aggregatedRating?.rating && (
											<h5 className="font-semibold">
												⭐
												{
													res?.card?.info?.ratings
														?.aggregatedRating
														?.rating
												}{" "}
												(
												{
													res?.card?.info?.ratings
														?.aggregatedRating
														?.ratingCountV2
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
				</div>
			) : (
				<p className="text-gray-500 italic">
					No recommended items available.
				</p>
			)}
		</>
	);
};

export default RestaurantMenu;
