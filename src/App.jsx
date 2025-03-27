import React, {useState , useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import UserContext from "./utils/UserContext.jsx";
import {Provider} from "react-redux"
import appStore from "./utils/appStore.jsx"

export default function App() {

	const [name, setName] = useState();

	useEffect(()=> {
	setName("Raja Gurjar");
	}, []);
	
	
	return (
		<Provider store={appStore}>
		<UserContext.Provider value={{loggedIn: name, setName}}>
			<Header />
			<Outlet />
		</UserContext.Provider>
		</Provider>
	);
}
