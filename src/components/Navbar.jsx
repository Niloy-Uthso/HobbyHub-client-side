 import React, { useContext } from 'react';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router';
import { valueContext } from '../Rootlayout';

const Navbar = () => {
    const navigate=useNavigate()
    const {pathname}=useLocation()

    const {handlelogout,currentUser,theme}=useContext(valueContext)
     
    
     
    return (
        <>
         <div className={`navbar nav flex justify-between ${theme?`bg-blue-950`:`bg-slate-800`}  shadow-sm`}>
  <div className="flex">
    <a className="font-bold text-pink-700 text-sm  md:text-2xl">ℌ𝔬𝔟𝔟𝔶ℌ𝔲𝔟</a>
   
  </div>
    <NavLink className={({ isActive }) =>
                  isActive ? 'text-[#D4AF37]  text-[10px] md:text-xl font-bold' : 'font-bold text-[#F8F8FF]  text-[10px] md:text-xl'
                }
 to={'/'}>Home</NavLink>

  
  <button onClick={()=>navigate('/register')} className={` ${currentUser?`hidden`:``} btn btn-xs sm:btn-sm ${pathname==="/register"?"text-indigo-600":""}`}>Register</button>
  <div className="flex gap-6 items-center ">
    
          
   
     <div className=" flex gap-1 md:gap-6 items-center ">
        {
            currentUser?<p className={`${theme?`text-black`:`text-red-800  font-semibold`}`}>{currentUser.displayName}</p>:''
        }
    {
        currentUser?<div  tabIndex={0} role="button"  className="btn btn-ghost  btn-circle avatar tooltip tooltip-right"
        data-tip={currentUser.displayName || 'No name set'}
        >
        
        <div className="w-10 rounded-full">
             
        <img src={currentUser.photoURL}/>
        </div>
      </div>:''
    }
    
  </div>
   
  </div>
  
   <button 
  onClick={currentUser ? handlelogout : () => navigate('/login')} 
  className={`btn btn-xs sm:btn-sm ${pathname === "/login" ? "text-indigo-600" : ""}`}
>
  {currentUser ? "Logout" : "Login"}
</button>

 <div className='flex gap-1  justify-between w-56'>
   <NavLink className={({ isActive }) =>
                  isActive ? 'text-indigo-600 text-sm md:text-x font-bold':'text-[#EFE1C6] text-sm md:text-x font-bold'
                }
 to={'/mygroups'}>My Groups</NavLink>

 <NavLink className={({ isActive }) =>
                  isActive ? 'text-indigo-600 text-sm md:text-x font-bold':'text-red-600 text-sm md:text-x font-bold'
                }
 to={'/createGroup'}>Create Groups</NavLink>
 </div>

 

</div>
       
        </>
    );
};

export default Navbar;
