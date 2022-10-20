import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

function LoaderRoute({children}) {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location.pathname]);

  return children;
}

export default LoaderRoute;
