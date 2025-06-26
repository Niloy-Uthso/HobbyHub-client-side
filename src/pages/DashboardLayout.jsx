// layout/DashboardLayout.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router';
import DashboardOverview from '../components/DashboardOverview';
// import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-3">
          <NavLink to="mygroups">My Groups</NavLink>
          <NavLink to="/dashboard/create">Create Group</NavLink>
          <NavLink to="allgroups">All groups</NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <DashboardOverview></DashboardOverview>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
