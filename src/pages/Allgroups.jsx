
import React, { useContext, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import Eachgroup from '../components/Eachgroup';
import { valueContext } from '../Rootlayout';

const Allgroups = () => {
  const groups = useLoaderData();
  const { theme } = useContext(valueContext);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest'); // newest or oldest

  
  const categories = ['All', ...new Set(groups.map(group => group.category))];

  
  const filteredGroups = selectedCategory === 'All'
    ? groups
    : groups.filter(group => group.category === selectedCategory);

  
  // const sortedGroups = [...filteredGroups].sort((a, b) => {
  //   const dateA = new Date(a.startDate);
  //   const dateB = new Date(b.startDate);
  //   return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  // });

  const sortedGroups = [...filteredGroups].sort((a, b) => {
  const dateA = new Date(parseInt(a._id.substring(0, 8), 16) * 1000);
  const dateB = new Date(parseInt(b._id.substring(0, 8), 16) * 1000);
  return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
});

  return (
    <div className='flex flex-col p-4 pt-8 items-center gap-10'>
      <h1 className={`text-4xl ${theme ? '' : 'text-white'} font-bold`}>All Groups</h1>

      
      <div className="flex flex-col md:flex-row gap-4 items-center">
        
        <select
          className="select select-bordered"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {
            categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))
          }
        </select>

        
        <select
          className="select select-bordered"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      
      <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        {
          sortedGroups.map(group => (
            <Eachgroup key={group._id} group={group}></Eachgroup>
          ))
        }
      </div>

      <NavLink to={'/'}>
        <button className="btn btn-dash btn-accent">Back to Home</button>
      </NavLink>
    </div>
  );
};

export default Allgroups;

