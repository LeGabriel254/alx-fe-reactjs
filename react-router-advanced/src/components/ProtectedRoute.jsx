import React from 'react';
import {Navigate} from 'react-router-dom';
import UseAuth from './UseAuth.js'

function ProtectedRoute({children}){
  if(!isAuthenticated()){
    //Move to home if not authenticated
    return <navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;