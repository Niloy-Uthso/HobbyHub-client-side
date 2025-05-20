import React, { useContext } from 'react';
import { valueContext } from '../Rootlayout';

const Newgroup = () => {
     const {currentUser,loading}=useContext(valueContext)
      if(loading)
        return <p>Loading,,,,,</p>
    if(!currentUser||!currentUser.email){
        
        return <Navigate  to={'/login'}></Navigate>
        
    }

    const handleSubmit=(e)=>{
             e.preventDefault()

        const form =e.target;
        const formData=new FormData(form)
        const hobbydata=Object.fromEntries(formData.entries())
        console.log(hobbydata)

        fetch('http://localhost:3000/hobbier',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(hobbydata)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log('after adding',data)
        })
    }
    return (
        <div>
           <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        
  <label className="label">Title</label>
  <input type="text" className="input" name='name' placeholder="email" />

  <label className="label">Slug</label>
  <input type="text" className="input" name='email' placeholder="email" />
       
       <button className='btn w-full'>submit</button>
   
</form> 
        </div>
    );
};

export default Newgroup;