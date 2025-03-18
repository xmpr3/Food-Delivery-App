import React from "react";

const OffersList = ({ offers }) => {
	return (
		<div className="offers m-5">
			<h3 className="text-[20px] font-semibold">Deals for you</h3>
			<div className="flex">
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
	);
};

export default OffersList;
