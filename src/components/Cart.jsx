import React from "react";
import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constant.jsx";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);

	return (
		<>
			<div className="border border-gray-300 m-3 shadow-lg p-2">
				{cartItems.map((item, index) => (
					<div key={index}>
						<div className="flex justify-evenly my-auto">
							<img
								src={`${CDN_URL}${item?.imageId}`}
								alt="food"
								height="144"
								width="156"
								className="rounded-2xl"
							/>
							<h3 className="text-[18px] font-bold">
								{item?.name}
							</h3>
							<h5 className="p-1">Quantity : 1</h5>
							<h5 className="font-bold">
								₹
								{(item?.price ?? item?.defaultPrice ?? 0) / 100}
							</h5>
						</div>
						<hr className=" text-gray-300 my-3" />
					</div>
				))}
			</div>
		</>
	);
};

export default Cart;
