import React from 'react';
import {Navigate} from 'react-router-dom';
function ProtectedRoute({children}){
  if(!isAuthenticated()){
    //Move to home if not authenticated
    return <navigate to="useAuth" replace />;
  }
  return children;
}

export default ProtectedRoute;