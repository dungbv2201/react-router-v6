import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useUserStore} from '../stores/users.js';


function RequiredAuth() {
	const state = useUserStore();
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		const token = localStorage.getItem('token');
		if(token && !state.isAuthenticated){
			state.setIsAuthenticated(true)
		}
		setIsLoading(false)
	}, []);

	
	
	if(isLoading){
		return null;
	}
	if(!state.isAuthenticated){
		return <Navigate to={'/login?redirect='+location.pathname} />
	}
	return (
		<Outlet />
	);
}

export default RequiredAuth;
