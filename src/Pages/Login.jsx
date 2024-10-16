import React, { useRef } from "react";

export default function Login() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  
  const handleClick = () =>{
    console.log(name, email, password);
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
