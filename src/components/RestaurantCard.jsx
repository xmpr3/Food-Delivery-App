import React from "react";
import { CDN_URL } from "../utils/constant.jsx"; // Ensure you have a CDN_URL constant for image URLs

const RestaurantCard = (props) => {
	const { resData } = props;

	// Destructure the nested info object
	const { name, cuisines, avgRating, areaName, cloudinaryImageId, costForTwo, sla } =
		resData?.info || {};

	return (
		<div className="res-card w-[250px] p-2 rounded-xl border border-gray-100 shadow-md cursor-pointer">
			<img
				src={`${CDN_URL}${cloudinaryImageId}`} // Use the dynamic image URL
				alt={name}
				className="w-full h-40 object-cover rounded-lg"
			/>
			<h3 className="text-xl font-bold text-center mt-1">{name}</h3>
			<h4 className="font-mono">{cuisines?.join(", ")}</h4>
			<h4 className="font-mono">{avgRating} ⭐</h4>
			<h4 className="font-mono">{areaName}</h4>
			<h4 className="font-mono">{costForTwo}</h4>
			<h4 className="font-mono">{sla?.slaString}</h4>
		</div>
	);
};

export default RestaurantCard;