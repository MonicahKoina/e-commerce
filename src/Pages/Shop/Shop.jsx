import React, { useEffect, useState } from 'react'
import './Shop.css'
function Shop() {
    
    const[products, setProducts]=useState([]);
    const[loading, setLoading]=useState(true);
    const[error, setError]=useState(null);
    
    const fetchItems = async () =>{
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            if(!response.ok){
                throw new Error("Can't Load page");
            }
            const products = await response.json();
            setProducts(products);
        }
           catch(error){
            setError(error.message);
           }

           finally{
            setLoading(false);
           }
        };
        useEffect(()=>{
          fetchItems();
        },[]);
  return (
    <div className="product-display">
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                products.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="card-image">
                        <img src={product.image} alt={product.title} />
                        </div>
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Shop