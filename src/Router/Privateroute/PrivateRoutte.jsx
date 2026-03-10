import React, { use } from 'react';
import { AuthContext } from '../../AuthProvide/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoutte = ({children}) => {

    const {user, loading} = use(AuthContext);
   
    // console.log(user);

    if(loading){
return <span className="loading loading-infinity loading-xl"></span>
    }

    if(user && user?.email){
  return children;
    }

    return <Navigate to='/auth/login'></Navigate>
};

export default PrivateRoutte;