import React, { useContext } from 'react';
import { Navigate, useLoaderData } from 'react-router';
import { valueContext } from '../Rootlayout';
import Swal from 'sweetalert2';

const Updategroup = () => {
    const group=useLoaderData();
     const {currentUser,loading}=useContext(valueContext)
          if(loading)
            return <div className="h-screen flex justify-center items-center bg-black">
        <FadeLoader color="#ba1676"
  height={60}
  radius={12}
  speedMultiplier={0}
  width={8} />
      </div>
        if(!currentUser||!currentUser.email){
            
            return <Navigate  to={'/login'}></Navigate>
            
        }
    
const handleUpdate=(e)=>{
   
    e.preventDefault();
     console.log('in',group._id)
     const form =e.target;
        const formData=new FormData(form)
        const updatedgroup=Object.fromEntries(formData.entries())
         
        fetch(` https://hobbyhub-server-nine.vercel.app/mygroups/updateGroup/${group._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedgroup)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
             if(data.modifiedCount){
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Updated",
  showConfirmButton: false,
  timer: 1500
});
             }
             else{
                Swal.fire({
  position: "top-end",
  icon: "error", 
  title: "Oops!",
  text: "You have not changed anything",
  showConfirmButton: false,
  timer: 1500
});
             }
        })

}

    return (
        <div className="max-w-3xl md:mx-auto  ml-2 mr-2  my-10 p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">Update your group info</h2>
      <form onSubmit={handleUpdate} className="space-y-5">
        
        <div>
          <label className="block mb-1 font-medium">Group Name</label>
          <input type="text" name="groupName" required defaultValue={group.groupName} className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Hobby Category</label>
          <select name="category" required defaultValue={group.category} className="select select-bordered w-full">
            <option value="">Select a category</option>
            <option>Drawing & Painting</option>
            <option>Photography</option>
            <option>Video Gaming</option>
            <option>Fishing</option>
            <option>Running</option>
            <option>Cooking</option>
            <option>Reading</option>
            <option>Writing</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea name="description" required defaultValue={group.description} className="textarea textarea-bordered w-full" rows="4" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Meeting Location</label>
          <input type="text" name="meetingLocation" required defaultValue={group.meetingLocation} className="input input-bordered w-full" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Max Members</label>
            <input type="number" name="maxMembers" required defaultValue={group.maxMembers} className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Start Date</label>
            <input type="date" name="startDate" required defaultValue={group.startDate} className="input input-bordered w-full" />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input type="url" name="imageUrl" required defaultValue={group.imageUrl} className="input input-bordered w-full" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">User Name</label>
            <input type="text" name="userName" value={currentUser.displayName} readOnly  className="input input-bordered w-full bg-gray-100" />
          </div>
          <div>
            <label className="block mb-1 font-medium">User Email</label>
            <input type="email" name="userEmail" value={currentUser.email} readOnly className="input input-bordered w-full bg-gray-100" />
          </div>
        </div>

        <div className="text-center mt-6">
          <button type="submit" className="btn btn-primary px-8">Update</button>
        </div>

      </form>
    </div>
    );
};

export default Updategroup;
