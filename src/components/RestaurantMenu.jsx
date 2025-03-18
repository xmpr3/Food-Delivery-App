import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
import { CDN_URL, MENU_API } from "../utils/constant.jsx";
import { useParams } from "react-router-dom";
import OffersList from "./OffersList.jsx";

import MenuCategory from "./MenuCategory.jsx";

const RestaurantMenu = () => {
	const [restaurantInfo, setRestaurantInfo] = useState(null);
	const [category, setCategory] = useState(null);
	const [offers, setOffers] = useState(null);
	
const { resId } = useParams();

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		try {
			const response = await fetch(`${MENU_API}${resId}`);
			const json = await response.json();
			const category =
				json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
					(c) =>
						c?.card?.card?.["@type"] ==
						"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				);

			setRestaurantInfo(json?.data?.cards?.[2]?.card?.card?.info);
			setCategory(category ?? []); // If undefined, set it as an empty array
			setOffers(
				json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
					?.offers ?? [],
			);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	// Show shimmer loader until restaurant info is available
	if (!restaurantInfo) return <Shimmer />;

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

			<OffersList offers={offers} />

			{/*<div>
				{category.map((recommendedMenu, index) => (
					<div className="Recommended-Menu mx-5" key={index}>
						<h3
							className="text-[18px] font-bold cursor-pointer"
							onClick={toggleAccordian}
						>
							{`${recommendedMenu?.card?.card?.title} (${recommendedMenu?.card?.card?.itemCards?.length})`}
						</h3>

						<MenuItem recommendedMenu={recommendedMenu} />
					</div>
				))}
			</div>*/}
			<MenuCategory category={category}/>
		</>
	);
};

export default RestaurantMenu;
