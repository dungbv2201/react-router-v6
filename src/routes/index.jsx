import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "../home";
import Layout from '../components/Layout.jsx';
import RequiredAuth from './RequiredAuth.jsx';
import Login from '../home/Login.jsx';
import {aboutRoutes} from '../about/routes/index.jsx';
import NotFound from "../components/NotFound.jsx";
import LoaderRoute from "../components/LoaderRoute.jsx";

const LazyAbout = React.lazy(() => import('../about/AboutUs.jsx'))


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <LoaderRoute>
        <RequiredAuth />
      </LoaderRoute>
    ),
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
    element: (
      <LoaderRoute>
        <Login />
      </LoaderRoute>
    )
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
