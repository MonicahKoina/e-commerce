import React, { useEffect, useState } from 'react'

function Shop() {
    const[loading, setLoading]=useState(false);
    const[data, setData]=useState([]);

    useEffect(()=>{
        setLoading(true)
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setData(data);
        })
        .catch((e)=>{
            console.log("An error occured while fetching data", e);
        })
        .finally(()=>setLoading(false));
    },[])

  return (
      <div className='grid grid-cols-1 md:grid-cols-3 pt-12 gap-16 w-3/4 mx-auto'>
       {loading &&
        <div>
           <h1>Loading</h1>
           </div>
           }
       {data.map(product => {
           return (
               <div key={product.id} className=" flex flex-col p-4 border-2 rounded-md border-yellow-100 mb-10">
                   <img 
                   className="w-[40%] h-[40%] mx-auto"
                   src={product.image} alt={product.title} />
                   <div className='text-center py-4 leading-9 h-[60%]'>
                       <h1>{product.title}</h1>
                       <a href="#" className=''>
                           <span className='text-sm text-black'>{product.category}</span>
                       </a>
                       <p className=''>price:$<span text-md>{product.price}</span></p>
                     </div> 
                     <div className=' mx-auto my-8 '>
                       <button className='rounded-lg py-1 px-3 bg-yellow-500 '>Add to cart</button>
                        </div>
               </div>
           );
       })}
      </div>
  );
}

export default Shop
