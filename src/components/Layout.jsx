import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

function Layout(props) {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
}

export default Layout;
