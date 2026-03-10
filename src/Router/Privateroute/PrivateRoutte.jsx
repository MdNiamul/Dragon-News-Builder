import React, { use } from 'react';
import { AuthContext } from '../../AuthProvide/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoutte = ({children}) => {

    const {user} = use(AuthContext);
   
    console.log(user);

    if(user && user?.email){
  return children;
    }

    return <Navigate to='/auth/login'></Navigate>
};

export default PrivateRoutte;