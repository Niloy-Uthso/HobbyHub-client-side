import React from 'react';
import { NavLink } from 'react-router';

const Myeachgroup = ({group}) => {
    return (
          <div>
            <div className="card bg-base-100 w-80 md:w-96 h-[100%] shadow-sm">
  <figure>
    <img className='w-full h-full'
      src= {group.imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
       {group.groupName}
      <div className="badge badge-secondary">{group.category}</div>
    </h2>
    <p>{group.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{group.startDate}</div>
       
      <NavLink  className="badge badge-outline text-pink-600 hover:bg-pink-200 cursor-pointer" 
 to={`/group/${group._id}`}>View More!!</NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default Myeachgroup;