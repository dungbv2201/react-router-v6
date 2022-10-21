import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useUserStore} from '../stores/users.js';
import Layout from '../components/Layout.jsx';

function RequiredAuth({children}) {
	const location = useLocation();
	const state = useUserStore();
	
	useEffect(() => {
		console.log('required auth')
	}, [])
	
	if(!state.isAuthenticated){
		return <Navigate to={'/login'} state={{ from: location}} />
	}
	return (
		<Layout>
			{children}
		</Layout>
	);
}

export default RequiredAuth;
