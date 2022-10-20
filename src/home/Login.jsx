import React, {useEffect, useState} from 'react';
import {useUserStore} from '../stores/users.js';
import {useNavigate, Navigate, useSearchParams} from "react-router-dom";

function Login() {
	const [isLoading, setIsLoading] = useState(true);
	const state = useUserStore();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	
	useEffect(() => {
		const token = localStorage.getItem('token');
		if(!state.isAuthenticated && token){
			state.setIsAuthenticated(true)
		}
		setIsLoading(false)
	}, []);
	
	const login = () => {
		state.setIsAuthenticated(true)
		localStorage.setItem('token',1212)
		navigate(searchParams.get('redirect') || '/about', { replace: true})
	}
	
	if(isLoading){
		return null;
	}
	
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
