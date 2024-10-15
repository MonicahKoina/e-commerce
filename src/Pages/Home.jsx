import React from 'react'
import Bag from '../assets/bag.jpg'
import Shien from '../assets/shien.png'
import NIKE from '../assets/NIKE.jpg'
import Zara from '../assets/Zara.jpg'


function Home() {
  return (
    <>
    <div>
        <div className="first-card">
            <div className='bag-offer'>
              <div className="bubble"></div>
            <p>SALE UPTO 30% OFF</p>
            <h1>New nova-series bags</h1>
            <p>Introducing our exclusive bag desigs that every fashonista must have!<br></br>Discover the perfect blend of style, shop now and elevate your carry game
            </p>
            </div>
        <div className='bag-img'>
            <img src={Bag} alt="djnd"/>
        </div>
        </div>
        <div className='brands'>
          <div className="brands-header">
          <h1>Product brands</h1>
          </div>
          <div className="brand-images">
            <img src={Shien} alt="hhjh" />
            <img src={Zara} alt="jbj" />
            <img src={NIKE} alt="jjk" />
            </div>
          </div>
        </div>
        </>
  )
}

export default Home