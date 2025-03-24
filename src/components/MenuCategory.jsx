import React from "react";
import MenuItem from "./MenuItem.jsx";

const MenuCategory = ({ item, showAccordian, setShowIndex }) => {
	return (
		<div className="mx-5 my-3 p-4 border border-gray-200 rounded-2xl shadow-sm bg-white">
			<div
				className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-all"
				onClick={setShowIndex}
			>
				<h3 className="text-[18px] font-bold">
					{`${item?.title} (${item?.itemCards?.length})`}
				</h3>
				<span className="text-lg font-semibold">{showAccordian ? "▲" : "▼"}</span>
			</div>
			{showAccordian && (
				<div className="mt-3">
					<MenuItem items={item?.itemCards} />
				</div>
			)}
		</div>
	);
};

export default MenuCategory;
