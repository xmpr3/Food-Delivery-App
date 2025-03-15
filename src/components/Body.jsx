import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";

const Body = () => {
	const [listOfRes, setListOfRes] = useState([]);
	const [filteredRestraunt, setFilteredRestraunt] = useState([]);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4743879&lng=77.50399039999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
			);
			const json = await response.json();

			// Extract the restaurant data from the nested structure
			const restaurants =
				json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants || [];
			setListOfRes(restaurants);
			setFilteredRestraunt(restaurants);
			console.log(json);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	console.log(useOnlineStatus());

	if (listOfRes.length === 0) {
		return <Shimmer />;
	}
	console.log(filteredRestraunt);



	return (
		<div className="body">
			<div className="filter flex justify-center">
				<div className="search m-3">
					<input
						className="p-2 bg-gray-300"
						type="text"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							const filteredRestraunt = listOfRes?.filter((res) =>
								res?.info.name
									.toLowerCase()
									.includes(searchText.toLowerCase()),
							);

							setFilteredRestraunt(filteredRestraunt);
						}}
						className="rounded bg-blue-600 hover:bg-blue-700 hover:shadow-2xl cursor-pointer text-white p-2"
					>
						Search
					</button>
				</div>
				<button
					onClick={() => {
						const filteredList = listOfRes.filter(
							(res) => res.info.avgRating > 4,
						);
						console.log(listOfRes);
						setFilteredRestraunt(filteredList);
					}}
					className="filter-btn cursor-pointer font-semibold m-3 px-4 py-2 rounded-full transition-all duration-300 
  bg-red-600 text-white hover:bg-red-700 shadow-lg"
				>
					Top Rated Restaurant
				</button>
			</div>
			<div className="res-container m-3 flex flex-wrap justify-center space-x-7 space-y-5">
				{filteredRestraunt?.map((restaurant) => (
					<Link
						to={"/restaurant/" + restaurant?.info.id}
						key={restaurant?.info.id}
					>
						<RestaurantCard resData={restaurant} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
