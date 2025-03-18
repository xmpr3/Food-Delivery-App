import React from "react";
import { CDN_URL } from "../utils/constant.jsx"; // Ensure you have a CDN_URL constant for image URLs

const RestaurantCard = ({ resData } ) => {

	// Destructure the nested info object
	const {
		name,
		cuisines,
		avgRating,
		areaName,
		cloudinaryImageId,
		costForTwo,
		sla,
	} = resData?.info || {};

	return (
		<div className="res-card w-[273px] cursor-pointer hover:scale-95 transition-transform duration-200">
			<img
				src={`${CDN_URL}${cloudinaryImageId}`} // Use the dynamic image URL
				alt={name}
				className="w-full h-[181px] object-cover rounded-2xl shadow-md"
			/>
			<h3 className="text-lg font-bold text-gray-900">{name}</h3>
			<h4 className="text-md font-bold text-gray-800">
				⭐{avgRating} • {sla?.slaString}{" "}
			</h4>
			<h4 className="text-md text-gray-600">
				{(() => {
					const strCuisines = cuisines?.join(", ") || "";
					return strCuisines.length > 35
						? strCuisines.substring(0, 35) + "..."
						: strCuisines;
				})()}
			</h4>
			<h4 className="text-md text-gray-600">{areaName}</h4>
		</div>
	);
};

export const withOffers = (RestaurantCard) => {
	return ({ resData }) => {
		const hasOffer = resData?.info?.aggregatedDiscountInfoV3;
		return (
			<div className="relative">
				{hasOffer && (
					<div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
						{`${resData.info.aggregatedDiscountInfoV3.header} ${resData.info.aggregatedDiscountInfoV3.subHeader}`}
					</div>
				)}
				<RestaurantCard resData={resData} />
			</div>
		);
	};
};


export const EnhancedResCard = withOffers(RestaurantCard);

export default RestaurantCard;
