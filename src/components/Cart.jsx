import React from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant.jsx";
import { clearCart } from "../utils/cartSlice"; // Import clearCart action

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	}
	

	return (
		<>
			<div className='text-center bg-black text-2xl text-white p-2'>Cart</div>
			
			{cartItems.length === 0 ? (
				<p className="text-center italic text-gray-500 p-4">Your cart is empty</p>
			) : (
				<div className="border border-gray-300 m-3 shadow-lg p-4 rounded-lg">
					{cartItems.map((item, index) => (
						<div key={index} className="mb-4">
							<div className="flex justify-between items-center">
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
								<div className="flex items-center space-x-2">
									<button className="px-3 py-1 bg-red-300 rounded">-</button>
									<span className="text-[18px]">1</span>
									<button className="px-3 py-1 bg-green-300 rounded">+</button>
								</div>
								<h5 className="font-bold">
									₹{(item?.price ?? item?.defaultPrice ?? 0) / 100}
								</h5>
							</div>
							<hr className="text-gray-300 my-3" />
						</div>
					))}

					{/* Clear Cart Button */}
					<div className="flex justify-end mt-4">
						<button 
							onClick={handleClearCart} 
							className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-700 transition"
						>
							Clear Cart
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Cart;
