import React, { useContext } from 'react'
import { Cartcontext } from '../Context/Context'

function Cart() {
  const Globalstate=useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  return (
    <div className="cart">
      {state.map((values, id)=>{
        return (
        <div className="card" key={id}>
          <img src={values.image} alt="" />
          <p>{values.title}</p>
          <p>{values.quantity*values.price}</p>
          <div className="quantity">
            <button onClick={()=>dispatch({type:"INCREASE", payload:values})}>+</button>
            <p>{values.quantity}</p>
            <button onClick={()=>dispatch({type:"DECREASE", payload:values})}>-</button>
          </div>
        </div>
        );
      })}
      
    </div>
  )
}

export default Cart