import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';




const PrivateRoute = () => {


    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    
    if(loading){
        return <progress className="w-56 progress"></progress>;
    }
    if(user?.email){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;