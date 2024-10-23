import React, { useEffect, useRef, useState } from 'react'
import Home from './Home'
import { MdWavingHand } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { AiOutlineApple } from "react-icons/ai";

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
   <div className='border-2 border-black rounded-xl w-1/2 mx-auto my-5 p-4 text-center'>
    <div className='flex items-center justify-center' >
      <h1>Welcome back</h1>
      <MdWavingHand />
  </div>
  <div className='my-10'>
    <p>please enter your details</p>
    <button className=' flex gap-2 items-center border-black border-2 m-2 p-1 rounded-xl mx-auto '><AiOutlineApple />Log in with apple</button>
    <p>-------or-------</p>
  </div>
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