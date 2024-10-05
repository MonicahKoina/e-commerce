import React, { useState } from 'react'

function Shop() {
    
    const[products, setProducts]=useState([]);
    const[load, setLoad]=useState(true);
    const[error, setError]=useState(null);
    
    const fetchItems = async () =>{
        try{
            const items = await fetch('');
            if(!load.ok){
                throw new Error("Can't Load page");
            }
            const products = await items.json();
            setProducts(products);
        }
           catch(error){
            setError(error.message);
           }

           finally{
            setLoad(false);
           }
        };
  return (
    <div></div>
  )
}

export default Shop