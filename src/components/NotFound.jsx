import React from 'react';
import {useUserStore} from '../stores/users.js';
import { Navigate } from 'react-router-dom';

function NotFound() {
  const state = useUserStore();
  if(!state.isAuthenticated){
    return <Navigate to={'/login'} replace/>
  }
  return (
    <div>Not Found</div>
  );
}

export default NotFound;
