import React, {useEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import Header from './Header.jsx';
import NProgress from "nprogress";


function Layout(props) {

	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
}

export default Layout;
