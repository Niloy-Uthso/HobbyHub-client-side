import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router';
import { valueContext } from '../Rootlayout';

const Eachgroup = ({group}) => {
    const {theme}=useContext(valueContext)
    return (
         <div>
            <div className={`card ${theme?`bg-base-100`:`bg-slate-800 text-gray-100`}  w-80 md:w-72 h-[380px] shadow-sm`}>
  <figure>
    <img className='w-full h-full'
      src= {group.imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    

    <div className=" flex justify-between items-center gap-2">
      
      <h2 className="card-title text-sm">
       {group.groupName}
      
    </h2>
<p className='badge badge-secondary text-[10px]'>{group.category}</p>
      
      
      </div>
    <p>{group.description.split('.')[0]}.</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{group.startDate}</div>
       
      <NavLink state={{from:location.pathname}} className="badge badge-outline text-pink-600 hover:bg-pink-200 cursor-pointer" 
 to={`/group/${group._id}`}>Show More!!</NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default Eachgroup;