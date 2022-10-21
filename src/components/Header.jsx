import React from 'react';
import {Link, redirect} from 'react-router-dom';
import {useUserStore} from '../stores/users.js';

function Header(props) {
	const state = useUserStore();
	const logout = () => {
		localStorage.removeItem('token')
		state.setIsAuthenticated(false)
		redirect('/login')
	}
	return (
		<ul>
			<li><Link to='/'>Home</Link></li>
			<li><Link to='/about'>About</Link></li>
			<li><Link to='/about-us'>About-us</Link></li>
			<li><Link to='/login'>Login</Link></li>
			<li>
				<button onClick={logout}>log out</button>
			</li>
		</ul>
	);
}

export default Header;
