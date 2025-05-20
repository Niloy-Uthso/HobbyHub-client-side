import React from 'react';
import { useLoaderData } from 'react-router';
import Eachgroup from '../components/Eachgroup';

const Allgroups = () => {
     const groups=useLoaderData()
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
        </div>
    );
};

export default Allgroups;