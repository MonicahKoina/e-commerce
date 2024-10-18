import React, { useEffect, useRef } from "react";

export default function Login() {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleClick = () =>{
    if(name.current.value && email.current.value && password.current.value){
      localStorage.setItem("name",name.current.value)
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
      localStorage.setItem("signUp",email.current.value)
      alert("Account created successfully!")
    }
    // console.log(name.current.value, email.current.value, password.current.value);
  }
  return (
    <div>
      <div className="input-container">
        <div className="input-content">
          <input type="text" placeholder="Enter your name" ref={name} />
        </div>
        <div className="input-content">
          <input type="text" placeholder="Enter your email" ref={email} />
        </div>
        <div className="input-content">
          <input type="text" placeholder="Enter your password" ref={password} />
        </div>
        <button onClick={handleClick}>Sign up</button>
      </div>
    </div>
    
  );
  
}
