import React from 'react'
import Bag from '../assets/bag.jpg'
import { Categories } from '../assets/mokeData'

function Home() {
  return (
    <>
    <div>
        <div className="first-card">
            <div className='bag-offer'>
            <p>SALE UPTO 30% OFF</p>
            <h1>New nova-series bags</h1>
            <p>Introducing our exclusive bag desigs that every fashonista must have!<br></br>Discover the perfect blend of style, shop now and elevate your carry game
            </p>
            </div>
        <div className='bag-img'>
            <img src={Bag} alt="djnd"/>
        </div>
        </div>
        <div>
          <div>
            Shop by categories
            <ul>
              {Categories.map((category, index)=>(
                <li key={index}>
                <div></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div>
  
          </div>
          <div>

          </div>
        </div>
        </div>
        </>
  )
}

export default Home