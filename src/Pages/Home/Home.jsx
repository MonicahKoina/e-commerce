import React from 'react'
import Bag from './bag.jpg'
import './Home.css'

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
        </div>
        </>
  )
}

export default Home