import AboutUs from '../AboutUs.jsx';
import About from '../index.jsx';
import RequiredAuth from '../../routes/RequiredAuth.jsx';

export const aboutRoutes = [
	{
		path: 'about-us',
		element: <RequiredAuth><AboutUs /></RequiredAuth>
	},
	{
		path: 'about',
		element: <RequiredAuth><About /></RequiredAuth>,
	}
]
