import React, { useContext } from 'react';
import { valueContext } from '../Rootlayout';
import { Navigate } from 'react-router';

const Mygroups = () => {
     const {currentUser,loading}=useContext(valueContext)

     if(loading)
        return <p>Loading,,,,,</p>
    if(!currentUser||!currentUser.email){
        
        return <Navigate  to={'/login'}></Navigate>
        
    }
    return (
        <div>
            
        </div>
    );
};

export default Mygroups;