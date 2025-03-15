// import React, { useState, useEffect } from "react";
// import { MENU_API } from "./constant.jsx";

// const useRestaurantMenu = (resId) => {

// 	const [restaurantInfo, setRestaurantInfo] = useState(null);
// 	// const [recommendedMenu, setRecommendedMenu] = useState(null);
// 	// const [offers, setOffers] = useState(null);

// 	useEffect(() => {
// 		fetchMenu();
// 	}, []);

// 	const fetchMenu = async () => {
// 		try {
// 			const response = await fetch(`${MENU_API}${resId}`);
// 			const json = await response.json();

// 			// setRestaurantInfo(json?.data?.cards?.[2]?.card?.card?.info);

// 			// Check if recommended menu exists, otherwise set it to an empty array
// 			// const cards =
// 			// 	json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
// 			// 		?.cards || [];

// 			// const recommendedItems =
// 			// 	cards?.[1]?.card?.card?.itemCards ||
// 			// 	cards?.[2]?.card?.card?.itemCards ||
// 			// 	[];

// 			// setRecommendedMenu(recommendedItems ?? []); // If undefined, set it as an empty array

// 			// //Offers
// 			// setOffers(
// 			// 	json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
// 			// 		?.offers ?? [],
// 			// );

// 			console.log(json);
// 		} catch (error) {
// 			console.error("Error fetching data:", error);
// 		}
// 	};

// 	return json;
// }

// export default useRestaurantMenu;