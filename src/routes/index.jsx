import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../home";
import Layout from '../components/Layout.jsx';
import RequiredAuth from './RequiredAuth.jsx';
import Login from '../home/Login.jsx';
import {aboutRoutes} from '../about/routes/index.jsx';
import NotFound from "../components/NotFound.jsx";
import LoaderRoute from "../components/LoaderRoute.jsx";
import AboutUs from '../about/AboutUs.jsx';
import About from '../about/index.jsx';

const LazyAbout = React.lazy(() => import('../about/AboutUs.jsx'))


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoaderRoute />,
    children: [
      {
        index: true,
        element: <Navigate to={'/home'} replace/>
      },
      {
        path: '/home',
        element: <RequiredAuth><Home /></RequiredAuth>
      },
      {
        path: '/about',
        element: <RequiredAuth><About /></RequiredAuth>
      },
      {
        path: '/about-us',
        element: <RequiredAuth><AboutUs /></RequiredAuth>
      },
      // ...aboutRoutes,
      {
        path: '/login',
        element: (
          <Login />
        )
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
]);

export default router;
