import React from 'react'

function Shop() {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 gap-16 w-3/4 mx-10'>
        <div className="bg-slate-200 p-4">
            <img 
            className="w-[40%] mx-auto"
            src="/shoe.jpeg" alt="shoe" />
            <div className='text-center py-4'>
                <h1>Product title</h1>
                <a href="#" className='block'>
                    <span className='text-sm text-red-700'>Category</span>
                </a>
                <span className='block '>$<span text-md>15.88</span></span>
                <button className='border-2 rounded-lg py-1 px-3 bg-yellow-300'>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Shop