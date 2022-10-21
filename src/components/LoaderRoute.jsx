import React, {useEffect, useState} from 'react';
import {useLocation, Outlet} from "react-router-dom";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import {useUserStore} from '../stores/users.js';

function LoaderRoute() {
  const location = useLocation();
  const state = useUserStore();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token && !state.isAuthenticated){
      state.setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, []);
  
  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location.pathname]);
  
  if(isLoading) return null;
  return  <Outlet />;
}

export default LoaderRoute;
