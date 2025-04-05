import React, { useEffect, useState } from 'react'

function CreateProduct() {
  const [user,setUser] = useState({
    name:'',
    email:'',
    password:''
  })
  const [submitted,setSubmitted] = useState(false)
function HandleSubmit(e){
    e.preventDefault()
    setSubmitted(true)
    
  }
const handleNameChange  = (e)=>{
  setUser({ ...user,
    name: e.target.value
  })
}
const handleEmailChange  = (e)=>{
  setUser({...user,
    email: e.target.value
  })
}
const handlePasswordChange  = (e)=>{
  setUser({...user,
    password: e.target.value
  })
}

useEffect(() => {
      if(submitted === true){
        console.log(user);
        
      const sendData = async () => {
        try {
          const response = await fetch('http://localhost:3040/api/users',{
            method:'POST',
            headers:{
              "Content-Type":"text/application"
            },
            body: JSON.stringify(user)
          })
          const data = response.json()
          console.log(data);
          
        } catch (error) {
          console.log( ` error in sending data${error.message}`);
          
        }
      }
      sendData()
      setSubmitted(false)
    }
     },[submitted,user])

  return (
    <div className='flex flex-col justify-center '>
        <h1 className='text-4xl text-center text-teal-500 font-mono font-bold'>Create User</h1>
        <div className='flex flex-col justify-center items-center mt-10'>
        <form onSubmit={HandleSubmit} className='flex flex-col justify-center items-center py-10 rounded-xl  w-3/5 text-center  bg-gray-200 '>
        <label className=' mt-4 text-lg font-semibold self-start w-3/5 '>User Name</label>
            <input type="text" onChange={handleNameChange} className='text-teal-600 p-2 w-3/5 outline-none rounded-lg' name="Name" id="Name" />
        <label className=' text-lg font-semibold self-start w-3/5 mt-4'>User Email</label>
            <input type="email" onChange={handleEmailChange} className='text-teal-600 p-2 w-3/5 outline-none rounded-lg' name="Price" id="price" />
        <label className=' text-lg font-semibold self-start w-3/5 mt-4'>User Password</label>
            <input type="password" onChange={handlePasswordChange} className='p-2 w-3/5 outline-none rounded-lg' name="password" id="password" />
            <button className='p-2 text-4xl font-mono hover:bg-teal-700 font-bold bg-teal-500 mt-10 w-2/5 rounded-lg text-white' type='submit'>Add Product</button>
        </form>
        
        </div>
        
     </div>
  )
}

export default CreateProduct