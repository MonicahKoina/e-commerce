import { createContext, useReducer } from "react";

export const Cartcontext = createContext()
export const Context = (props) => {
    const reducer=(state, action)=>{
        switch(action.type){
            case"ADD":
            const tempstate = state.filter((product) => action.payload.id === product.id);
        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "INCREASE":
        const tempstate1 = state.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
        return tempstate1;
      case "DECREASE":
        const tempstate2 = state.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
        return tempstate2;
      case "REMOVE":
        const tempstate3 = state.filter(
          (product) => product.id !== action.payload.id
        );

        return tempstate3;
            default:
                return state
        }
    }
    const [state, dispatch]=useReducer(reducer, []);
    const info={state, dispatch}
    return<Cartcontext.Provider value={info}>{props.children}</ Cartcontext.Provider>
}