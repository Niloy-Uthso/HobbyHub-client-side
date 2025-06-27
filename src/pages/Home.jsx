import React, { useContext } from 'react';
import { NavLink, useLoaderData, useLocation, useNavigate } from 'react-router';
import Faq from '../components/Faq';
import Feedback from '../components/Feedback';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { valueContext } from '../Rootlayout';
import toast from 'react-hot-toast';

const Home = () => {

    const groups=useLoaderData()
const {theme}=useContext(valueContext)
    const navigate=useNavigate()     
      const location=useLocation()
// groupName: "Sketch Sunday",
//     category: "Drawing & Painting",
//     description: "Weekly sketch challenges and tips from pros.",
//     meetingLocation: "City Art Museum",
//     maxMembers: 16,
//     startDate: "2025-06-09",
//     imageUrl: "https://example.com/images/sketch.jpg"
    return (
        <div className='relative'>
            <div className="absolute z-10 top-6 left-6 bg-white/70 px-4 py-2 rounded-md shadow-md">
    <h1 className="text-2xl font-bold text-indigo-800">
      <Typewriter
        words={['Welcome to HobbyHub! Join Your Passion Group! Find Like-Minded Friends!']}
        loop={100}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  </div>
              <div className="carousel relative h-[70vh] w-full">
               
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/rKWMxZty/blog-a560-1.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/9mHffWLt/Hobbies-803x490.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/Xk7H53Hn/hobby-01-1600x900.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/b5rGPVcD/another-word-for-hobby-eb9bfca630.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>


</div>
 
      <div className='flex flex-col justify-between items-center gap-6 mt-12'>


         <Fade direction="up" triggerOnce>
        <h2 className="text-3xl font-bold text-indigo-600">Explore Hobby Groups</h2>
         
      </Fade>
       
 <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
            {
                groups.slice(0, 6).map(group =>(
              <Fade direction="up" triggerOnce>
          <div className={`card ${theme?`bg-base-100`:`bg-slate-800 text-gray-100`} w-80 md:w-96 h-[100%] shadow-sm`}>
  <figure>
    <img className='w-full h-full'
      src= {group.imageUrl}
      alt="Shoes"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
       {group.groupName}
      <div className="badge badge-secondary">{group.category}</div>
    </h2>
    <p>{group.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{group.startDate}</div>  
      <NavLink state={{from:location.pathname}} className="badge badge-outline text-pink-600 hover:bg-pink-200 cursor-pointer" 
 to={`/group/${group._id}`}>See More!!</NavLink>
          
    </div>
  </div>
</div>
</Fade>

                ))
            }
         </div>

        <button  onClick={()=>navigate('/groups')} class="btn btn-soft btn-secondary">See all Groups</button>
      </div>
        <Feedback></Feedback>
        <Faq></Faq>

        
<section className={`max-w-[1200px] px-4 py-12 ${theme ? "bg-white" : "bg-gray-900"} text-center rounded-2xl  md:mx-auto ml-2 mr-2  my-12`}>
  <h2 className={`text-3xl font-bold mb-4 ${theme ? "text-indigo-800" : "text-white"}`}>
    Subscribe to our Newsletter
  </h2>
  <p className={`mb-6 ${theme ? "text-gray-700" : "text-gray-300"}`}>
    Get the latest hobby group updates, tips, and events straight to your inbox.
  </p>
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const email = e.target.email.value;
      if (email) {
        e.target.reset();
        toast.success(`Subscribed with ${email}`);
      }
    }}
    className="flex flex-col md:flex-row justify-center gap-4"
  >
    <input
      type="email"
      name="email"
      required
      placeholder="Enter your email"
      className="input input-bordered w-full md:w-80"
    />
    <button type="submit" className="btn btn-primary">
      Subscribe
    </button>
  </form>
</section>


        
           
        </div>
    );
};

export default Home;