import React, { useContext } from 'react';
import { Navigate, useLoaderData, useLocation, useParams } from 'react-router';
import { valueContext } from '../Rootlayout';

const Groupdetails = () => {
  const { currentUser, loading } = useContext(valueContext);
  const group = useLoaderData();
  const location=useLocation()
  console.log(group)

  if (loading) return <p className="text-center text-lg mt-10">Loading...</p>;

  if (!currentUser?.email) {
    return <Navigate state={{from:location.pathname}} to="/login" />;
  }

   
  return (
    <div data-aos="fade-up" className="bg-base-200 py-10 px-6 rounded-xl shadow-lg max-w-4xl mx-auto my-12">
      <div className="card w-full bg-white shadow-xl">
        <figure className="max-h-[400px] overflow-hidden">
          <img src={group.imageUrl} alt={group.groupName} className="w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-indigo-700">{group.groupName}</h2>
          <div className="flex gap-3 flex-wrap mb-2">
            <span className="badge badge-secondary">{group.category}</span>
            <span className="badge badge-outline">Max Members: {group.maxMembers}</span>
            <span className="badge badge-outline">Start Date: {group.startDate}</span>
          </div>
          <p className="text-gray-700 text-lg">{group.description}</p>
          <div className="mt-4">
            <p><span className="font-semibold text-indigo-600">Meeting Location:</span> {group.meetingLocation}</p>
            <p><span className="font-semibold text-indigo-600">Created by:</span> {group.userName} ({group.userEmail})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groupdetails;
