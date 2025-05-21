import React from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router';
import Faq from '../components/Faq';
import Feedback from '../components/Feedback';

const Home = () => {

    const groups=useLoaderData()

    const navigate=useNavigate()     
    
// groupName: "Sketch Sunday",
//     category: "Drawing & Painting",
//     description: "Weekly sketch challenges and tips from pros.",
//     meetingLocation: "City Art Museum",
//     maxMembers: 16,
//     startDate: "2025-06-09",
//     imageUrl: "https://example.com/images/sketch.jpg"
    return (
        <div>
              <div className="carousel h-[70vh] w-full">
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
        <h1 className='text-3xl font-bold '>Explore Hobby Groups</h1>
 <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
            {
                groups.slice(0, 6).map(group =>(
 
          <div className="card bg-base-100 w-80 md:w-96 h-[100%] shadow-sm">
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
      <NavLink  className="badge badge-outline text-pink-600 hover:bg-pink-200 cursor-pointer" 
 to={`/group/${group._id}`}>See More!!</NavLink>
          
    </div>
  </div>
</div>

                ))
            }
         </div>

        <button onClick={()=>navigate('/groups')} class="btn btn-soft btn-secondary">See all Groups</button>
      </div>
        
        <Faq></Faq>

        <Feedback></Feedback>
           
        </div>
    );
};

export default Home;