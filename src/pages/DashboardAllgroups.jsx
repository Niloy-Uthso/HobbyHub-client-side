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
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className='p-6 max-w-7xl mx-auto'>
      <h1 className={`text-3xl font-bold text-center mb-6 ${theme ? 'text-black' : 'text-white'}`}>
        Manage All Groups
      </h1>

      {/* Filter & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex gap-4">
          <select
            className="select select-bordered"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
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
      </div>

      {/* Table View */}
      <div className="overflow-x-auto bg-white rounded shadow-md">
        <table className="table w-full text-center">
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
            {
              sortedGroups.map(group => (
                <tr key={group._id} className="hover:bg-indigo-50 transition duration-200">
                  <td>
                    <img src={group.imageUrl} alt="img" className="w-14 h-14 object-cover rounded" />
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
              ))
            }
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
