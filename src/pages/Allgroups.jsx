// import React, { useContext } from 'react';
// import { NavLink, useLoaderData, useLocation } from 'react-router';
// import Eachgroup from '../components/Eachgroup';
// import { valueContext } from '../Rootlayout';
// import Lottie from 'lottie-react';
 
// const Allgroups = () => {
//      const groups=useLoaderData()
    
//     const {theme}=useContext(valueContext)
     
//     return (
//        <div className='flex events flex-col p-4 pt-8 items-center  gap-10'>
         
//             <h1 className={`text-4xl ${theme?``:`text-white`} font-bold`}>All groups</h1>
//             <div data-aos="fade-up" className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
//                 {
//                     groups.map(group=>(
//                         <Eachgroup key={group._id} group={group}></Eachgroup>
//                     ))
//                 }
//             </div>
//             <NavLink to={'/'}>
//                       <button class="btn btn-dash btn-accent">Back to Home</button>
//             </NavLink>
            
//         </div>
//     );
// };

// export default Allgroups;

// import React, { useContext, useState } from 'react';
// import { NavLink, useLoaderData } from 'react-router';
// import Eachgroup from '../components/Eachgroup';
// import { valueContext } from '../Rootlayout';

// const Allgroups = () => {
//   const groups = useLoaderData();
//   const { theme } = useContext(valueContext);
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Extract all unique categories
//   const categories = ['All', ...new Set(groups.map(group => group.category))];

//   // Filter groups by selected category
//   const filteredGroups = selectedCategory === 'All'
//     ? groups
//     : groups.filter(group => group.category === selectedCategory);

//   return (
//     <div className='flex flex-col p-4 pt-8 items-center gap-10'>
//       <h1 className={`text-4xl ${theme ? '' : 'text-white'} font-bold`}>All Groups</h1>

//       {/* Filter Dropdown */}
//       <div className="mb-4">
//         <select
//           className="select select-bordered w-full max-w-xs"
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//         >
//           {
//             categories.map((cat, idx) => (
//               <option key={idx} value={cat}>{cat}</option>
//             ))
//           }
//         </select>
//       </div>

//       {/* Display Filtered Groups */}
//       <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
//         {
//           filteredGroups.map(group => (
//             <Eachgroup key={group._id} group={group}></Eachgroup>
//           ))
//         }
//       </div>

//       <NavLink to={'/'}>
//         <button className="btn btn-dash btn-accent">Back to Home</button>
//       </NavLink>
//     </div>
//   );
// };

// export default Allgroups;

import React, { useContext, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import Eachgroup from '../components/Eachgroup';
import { valueContext } from '../Rootlayout';

const Allgroups = () => {
  const groups = useLoaderData();
  const { theme } = useContext(valueContext);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest'); // newest or oldest

  // Get all unique categories
  const categories = ['All', ...new Set(groups.map(group => group.category))];

  // Filter groups by selected category
  const filteredGroups = selectedCategory === 'All'
    ? groups
    : groups.filter(group => group.category === selectedCategory);

  // Sort groups based on sortOrder
  const sortedGroups = [...filteredGroups].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className='flex flex-col p-4 pt-8 items-center gap-10'>
      <h1 className={`text-4xl ${theme ? '' : 'text-white'} font-bold`}>All Groups</h1>

      {/* Filter + Sort Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Category Filter */}
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

        {/* Sort Selector */}
        <select
          className="select select-bordered"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Group Cards */}
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

