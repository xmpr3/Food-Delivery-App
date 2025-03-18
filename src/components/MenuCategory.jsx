import React, { useState } from "react";
import MenuItem from "./MenuItem.jsx";

const MenuCategory = ({category}) => {

	const [showAccordian, setShowAccordian] = useState(false);

		const toggleAccordian = () => {
		setShowAccordian(!showAccordian);
	};

	return (
		<div>
			{category.map((recommendedMenu, index) => (
				<div className="Recommended-Menu mx-5" key={index}>
					<h3
						className="text-[18px] font-bold cursor-pointer"
						onClick={toggleAccordian}
					>
						{`${recommendedMenu?.card?.card?.title} (${recommendedMenu?.card?.card?.itemCards?.length})`}
					</h3>
					{ showAccordian &&
					<MenuItem recommendedMenu={recommendedMenu} />}
				</div>
			))}
		</div>
	);
};

export default MenuCategory;
 