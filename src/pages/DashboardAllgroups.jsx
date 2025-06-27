 

import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { valueContext } from '../Rootlayout';
import { NavLink } from 'react-router';

const DashboardAllgroups = () => {
  const groups = useLoaderData();
  const { theme } = useContext(valueContext);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');

  const categories = ['All', ...new Set(groups.map(group => group.category))];

  const filteredGroups = selectedCategory === 'All'
    ? groups
    : groups.filter(group => group.category === selectedCategory);

  const sortedGroups = [...filteredGroups].sort((a, b) => {
   const dateA = new Date(parseInt(a._id.substring(0, 8), 16) * 1000);
const dateB = new Date(parseInt(b._id.substring(0, 8), 16) * 1000);
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <h1 className={`text-2xl md:text-3xl font-bold text-center mb-6 ${theme ? 'text-black' : 'text-white'}`}>
        Manage All Groups
      </h1>

      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 w-full">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <select
            className="select select-bordered w-full sm:w-auto"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            className="select select-bordered w-full sm:w-auto"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      
      <div className="overflow-x-auto bg-white rounded shadow-md w-full">
        <table className="table w-full text-sm md:text-base text-center">
          <thead className="bg-indigo-200 text-indigo-800">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Start Date</th>
              <th>Max Members</th>
              <th>Meeting Location</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {sortedGroups.map(group => (
              <tr key={group._id} className="hover:bg-indigo-50 transition duration-200">
                <td className="p-2">
                  <img src={group.imageUrl} alt="img" className="w-12 h-12 object-cover rounded mx-auto" />
                </td>
                <td className="font-semibold">{group.groupName}</td>
                <td>{group.category}</td>
                <td>{group.startDate}</td>
                <td>{group.maxMembers}</td>
                <td>{group.meetingLocation}</td>
                <td>
                  <NavLink to={`/group/${group._id}`}>
                    <button className="btn btn-sm btn-outline btn-info">Details</button>
                  </NavLink>
                </td>
              </tr>
            ))}
            {sortedGroups.length === 0 && (
              <tr>
                <td colSpan="7" className="text-gray-500 py-4">No groups available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllgroups;

