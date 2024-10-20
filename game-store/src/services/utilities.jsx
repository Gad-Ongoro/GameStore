import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import api from "./api";

const appContext = createContext();

export const useAppContext = () => {
	return useContext(appContext);
};

export default function GameStoreAppContext({ children }) {
	let [ games, setGames ] = useState([]);
	const [ playStations, setPlayStations ] = useState([]);
	const [ CandAs, setCandAs ] = useState([]);
	const [ user, setUser ] = useState({});
	const accessToken = localStorage.getItem('access');
	const user_id = accessToken !== null || undefined ? jwtDecode(accessToken).user_id : null;
	const [ auth, setAuth ] = useState(false);

	// user GET
	async function fetchUser() {
		try {
			const res = await api.get(`users/${user_id}/`);
			if (res.status === 200) {
				setUser(res.data);
			}
		}
		catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (accessToken) {
			setAuth(true);
			fetchUser();
		} else {
			setAuth(false);
		}
	}, [accessToken]);

	// Games GET
	async function fetchGames() {
		try {
			const res = await api.get(`games/`);
			if (res.status === 200) {
				setGames(res.data);
			}
		}
		catch (error) {
			console.error(error);
		}
	};

	// PlayStations GET
	async function fetchPlayStations() {
		try {
			const res = await api.get(`ps/`);
			if (res.status === 200) {
				setPlayStations(res.data);
			}
		}
		catch (error) {
			console.error(error);
		}
	};

	// Consoles and Accessories GET
	async function fetchConsolesAndAccessories() {
		try {
			const res = await api.get(`CandA/`);
			if (res.status === 200) {
				setCandAs(res.data);
			}
		}
		catch (error) {
			console.error(error);
		}
	};

	const contextValues = {
		user, setUser,
		auth, setAuth,
		fetchUser,
		games, setGames,
		fetchGames, 
		fetchConsolesAndAccessories, CandAs,
		playStations, fetchPlayStations
	};

	return (
		<appContext.Provider value={contextValues}>
			{children}
		</appContext.Provider>
	);
}