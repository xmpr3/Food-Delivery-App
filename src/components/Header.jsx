import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import UserContext from "../utils/UserContext.jsx";
import { useSelector } from "react-redux";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");
	const { loggedIn, setName } = useContext(UserContext);

	const cartItems = useSelector((store) => store.cart.items);


	return (
		<div className="header flex justify-between m-2 rounded-b-md shadow-xl px-2">
			<div className="Logo-Container">
				<img src="/swiggyLogo.jpg" alt="Logo" className="h-12" />
			</div>
			<ul className="nav-items flex text-lg text-gray-600 font-sans my-auto space-x-6">
				<li>Online Status: {useOnlineStatus() ? "🟢" : "🔴"}</li>
				<li className="hover:text-orange-400 ">
					<Link to="/">Home</Link>
				</li>
				<li className="hover:text-orange-400 ">
					<Link to="/about">About</Link>
				</li>
				<li className="hover:text-orange-400 ">
					<Link to="/contact">Contact Us</Link>
				</li>
				<li className="hover:text-orange-400 ">
					<Link to="/grocery">Grocery</Link>
				</li>
				<li className="hover:text-orange-400 font-bold">
					<Link to="/cart">Cart ({cartItems.length})</Link>
				</li>
				<button
					className="text-white cursor-pointer bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded-md transition duration-300"
					onClick={() => {
						btnName === "Login"
							? setBtnName(`Logout: ${loggedIn}`)
							: setBtnName("Login");
					}}
				>
					{btnName}
				</button>
			</ul>
		</div>
	);
};

export default Header;
