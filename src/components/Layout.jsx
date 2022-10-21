import React, {useEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import Header from './Header.jsx';
import NProgress from "nprogress";


function Layout({ children }) {
	useEffect(() => {
		console.log('layout')
	}, []);
	
	return (
		<div>
			<Header />
			{children}
		</div>
	);
}

export default Layout;
