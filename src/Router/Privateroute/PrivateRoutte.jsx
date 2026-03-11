import React, { use } from 'react';
import { AuthContext } from '../../AuthProvide/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../Component/Loading/Loading';

const PrivateRoutte = ({children}) => {

    const {user, loading} = use(AuthContext);

    const location = useLocation();

    console.log(location);

   
    // console.log(user);

    if(loading){
return <Loading></Loading>
    }

    if(user && user?.email){
  return children;
    }

    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoutte;