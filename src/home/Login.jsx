import React, {useEffect, useState} from 'react';
import {useUserStore} from '../stores/users.js';
import {useNavigate, Navigate, useSearchParams, useLocation} from "react-router-dom";

function Login() {
	const [isLoading, setIsLoading] = useState(true);
	const state = useUserStore();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const location = useLocation();
	
	useEffect(() => {
		const token = localStorage.getItem('token');
		if(!state.isAuthenticated && token){
			state.setIsAuthenticated(true)
		}
		setIsLoading(false)
		console.log(12121212)
	}, []);
	
	const login = () => {
		state.setIsAuthenticated(true)
		localStorage.setItem('token',1212)
		const from = location.state?.from?.pathname || "/about";
		navigate(from, { replace: true})
	}
	
	// if(isLoading){
	// 	return null;
	// }
	
	if(state.isAuthenticated){
		return <Navigate to={'/about'} replace={true}/>
	}
	
	return (
		<div>
			<h1>Login page</h1>
			<button onClick={login}>login</button>
		</div>
	);
}

export default Login;
