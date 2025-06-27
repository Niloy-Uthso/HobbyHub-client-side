import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import DashboardOverview from '../components/DashboardOverview';
const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      
      <div className="lg:hidden bg-blue-900 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button onClick={() => setOpen(!open)} className="btn btn-sm btn-outline text-white border-white">
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

    
      <aside className={`lg:w-64 bg-blue-900 text-white p-4 flex-shrink-0 ${open ? 'block' : 'hidden'} lg:block`}>
        <h2 className="text-2xl font-bold mb-6 hidden lg:block">Dashboard</h2>
        <nav className="flex flex-col gap-3">
          <NavLink to="mygroups">My Groups</NavLink>
          <NavLink to="/dashboard/create">Create Group</NavLink>
          <NavLink to="allgroups">All Groups</NavLink>
        </nav>
      </aside>

      
      <main className="flex-1 p-4 overflow-x-auto">
        <DashboardOverview></DashboardOverview>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
