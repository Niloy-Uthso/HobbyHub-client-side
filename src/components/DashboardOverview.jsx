import React, { useContext, useEffect, useState } from 'react';
import { valueContext } from '../Rootlayout';

const DashboardOverview = () => {
  const { currentUser } = useContext(valueContext);
  const [allGroups, setAllGroups] = useState([]);
  const [myGroups, setMyGroups] = useState([]);

  useEffect(() => {
    fetch('https://hobbyhub-server-nine.vercel.app/groups')
      .then(res => res.json())
      .then(data => {
        setAllGroups(data);
        const mine = data.filter(group => group.userEmail === currentUser?.email);
        setMyGroups(mine);
      });
  }, [currentUser]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4">Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Total Groups</h3>
          <p className="text-4xl mt-2">{allGroups.length}</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">My Groups</h3>
          <p className="text-4xl mt-2">{myGroups.length}</p>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Logged-in User</h3>
          <p className="mt-2 font-semibold">{currentUser?.displayName}</p>
          <p className="text-sm">{currentUser?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
