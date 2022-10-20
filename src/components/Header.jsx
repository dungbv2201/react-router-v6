import React from 'react';
import {Link} from 'react-router-dom';

function Header(props) {
	return (
		<ul>
			<li><Link to='/'>Home</Link></li>
			<li><Link to='/about'>About</Link></li>
			<li><Link to='/about-us'>About-us</Link></li>
			<li><Link to='/login'>Login</Link></li>
		</ul>
	);
}

export default Header;
