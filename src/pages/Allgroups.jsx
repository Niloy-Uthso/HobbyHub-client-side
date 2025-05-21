import React from 'react';
import { NavLink, useLoaderData, useLocation } from 'react-router';
import Eachgroup from '../components/Eachgroup';

const Allgroups = () => {
     const groups=useLoaderData()
    //  const location=useLocation()
     
    return (
       <div className='flex events flex-col p-4 pt-8 items-center  gap-10'>
            <h1 className='text-4xl font-bold'>All groups</h1>
            <div data-aos="fade-up" className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    groups.map(group=>(
                        <Eachgroup key={group._id} group={group}></Eachgroup>
                    ))
                }
            </div>
            <NavLink to={'/'}>
                      <button class="btn btn-dash btn-accent">Back to Home</button>
            </NavLink>
            
        </div>
    );
};

export default Allgroups;