import { createContext, useReducer } from "react";

export const Cartcontext =createContext()
export const Context =(props)=>{

    const reducer=(state, action)=>{

        switch(action.type){
            case "ADD":
                const tempstate=state.filter((values)=>action.payload.id === values.id)
                
                if(tempstate.length > 0){
                    return state;
                }else{
                    return[...state, action.payload]
                }
                case "INCREASE":
                    const tempstate1 =state.map((values)=>{
                        if(values.id === action.payload.id){
                            return{...values, quantity:values.quantity + 1};
                        }else{
                            return values;
                        }
                    });
                    return tempstate1;
                    case "DECREASE":
                    const tempstate2 = state.map((values)=>{
                        if(values.id === action.payload.id){
                            return {...values, quantity: values.quantity -1};
                        }else{
                            return values;

                        }
                    });
                    return tempstate2;
                    case "REMOVE":
                        const tempstate3 = state.filter((values)=> values.id !==action.payload.id
                    );
                    return tempstate3;

            default:
                return state;
        }
    };
    const[state, dispatch]=useReducer(reducer, []);
    const info={state, dispatch}
    return<Cartcontext.Provider value={info}>
        {props.children}
        </Cartcontext.Provider>
}