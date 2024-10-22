import React, { useEffect, useRef, useState } from 'react'
import Home from './Home'

function loginLocalStorage(){
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
   <div>
      <div>
        <input type="text"  placeholder='Name' ref={name}/>
      </div>
      <div>
        <input type="text"  placeholder='Name' ref={email}/>
      </div>
      <div>
        <input type="text"  placeholder='Name' ref={password}/>
      </div>
      <button onClick={handleClick}>Log In</button>
    </div>
}
    </div>
  )
}
export default loginLocalStorage;