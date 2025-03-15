import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	let [btnName, setBtnName] = useState("Login");

	return (
		<div className="header flex justify-between m-2 rounded-b-md shadow-xl px-2">
			<div className="Logo-Container">
				<img src="./swiggyLogo.jpg" alt="Logo" width="200px" />
			</div>
			<ul className="nav-items flex text-2xl my-auto space-x-6">
				<li className="">
					<Link to="/">Home</Link>
				</li>
				<li className="">
					<Link to="/about">About</Link>
				</li>
				<li className="">
					<Link to="/contact">Contact Us</Link>
				</li>
				<li className="">Cart</li>
				<button
					className="text-white cursor-pointer rounded-md bg-blue-600 hover:bg-blue-700 py-1 px-2"
					onClick={() => {
						btnName === "Login"
							? setBtnName("Logout")
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
