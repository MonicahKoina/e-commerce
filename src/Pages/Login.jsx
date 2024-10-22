import React, { useEffect, useRef, useState } from 'react'
import Home from './Home'

function Login(){
  const name = useRef()
  const email = useRef()
  const password= useRef()
  const [showHome, setShowHome]=useState(false)
  const localLogin = localStorage.getItem("logIn")
  useEffect(()=>{
    if(localLogin){
      setShowHome(true)
    }
  },[])
  const handleClick = ()=>{
    if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name", name.current.value)
        localStorage.setItem("email", email.current.value)
        localStorage.setItem("password", password.current.value)
        localStorage.setItem("logIn", email.current.value)
        alert("Login successfully")
    }
  }
  return(
   <div>
    {showHome?<Home/>:
   <div className='border-2 rounded-xl w-1/2 mx-auto my-20 p-4 text-center'>
      <div >
        <input
        className='p-4 w-1/2 outline-none border-b-2 border-grey'
         type="text"  placeholder='name' ref={name}/>
      </div>
      <div>
        <input type="text"
        className='p-4 w-1/2 outline-none border-b-2 border-grey' 
        placeholder='email' ref={email}/>
      </div>
      <div>
        <input type="text"  
        className='p-4 w-1/2 outline-none border-b-2 border-grey'
        placeholder='password' ref={password}/>
      </div>
      <button 
      className=' bg-yellow-500  p-4 w-1/5 rounded-2xl mt-10'
      onClick={handleClick}>Log In</button>
    </div>
}
    </div>
  )
}
export default Login;