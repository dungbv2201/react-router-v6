import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useUserStore} from '../stores/users.js';

function RequiredAuth() {
	const state = useUserStore();
	const location = useLocation();
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		const token = localStorage.getItem('token');
		if(token && !state.isAuthenticated){
			state.setIsAuthenticated(true)
		}else if(state.isAuthenticated === undefined){
			state.setIsAuthenticated(false);
		}
		setIsLoading(false)
	}, []);
	
	// useEffect(() => {
	// 	console.log('location', location)
	// }, [location]);
	
	
	if(isLoading){
		return null;
	}
	if(!state.isAuthenticated){
		console.log(23232)
		return <Navigate to={'/login?redirect='+location.pathname} />
	}
	return (
		<Outlet />
	);
}

export default RequiredAuth;
