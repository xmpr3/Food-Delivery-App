import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
	const err = useRouteError();

	return (
		<div>
			<h2 className="text-3xl m-2">Oops! Something Went Wrong 🤕</h2>
			<div className="bg-yellow-200 italic w-fit m-2 p-3">
				<h3>{err.data}</h3>
				<h3>
					{err.status}: {err.statusText}
				</h3>
			</div>
		</div>
	);
};

export default Error;
