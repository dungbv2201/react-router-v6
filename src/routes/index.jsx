import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "../home";
import Layout from '../components/Layout.jsx';
import RequiredAuth from './RequiredAuth.jsx';
import Login from '../home/Login.jsx';
import {aboutRoutes} from '../about/routes/index.jsx';

const LazyAbout = React.lazy(() => import('../about/AboutUs.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RequiredAuth />,
    errorElement: <div>Error page</div>,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />
          },
          ...aboutRoutes
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export default router;
