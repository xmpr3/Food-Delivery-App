import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";

export default function App() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
