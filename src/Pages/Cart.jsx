import { useContext } from "react";
import { Cartcontext } from "../context/Context";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  return (
    <div className="flex flex-col p-4 border-2 rounded-md border-yellow-100 mb-10">
      {state.map((product, index) => {
        return (
          <div  key={index} className="flex justify-around">
            <img 
            className="w-[20%]"
            src={product.image} alt="" />
            <div className=" text-lg">
            <p>{product.title}</p>
            <p>{product.quantity * product.price}</p>
            </div>
            <div className=" ">
              <button 
              className=" p-3"
                onClick={() => dispatch({ type: "INCREASE", payload: product })}>
                +
              </button>
              <p>{product.quantity}</p>
              <button
              className=" p-3"
                onClick={() => {
                  if (product.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: product});
                  } else {
                    dispatch({ type: "REMOVE", payload: product });
                  }
                }}>
                -
              </button>
            </div>
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: product })}>
              Remove item
            </h2>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <h2>{total}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;