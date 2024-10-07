import React from 'react'
import { PiShoppingCartThin } from "react-icons/pi";
import './Navbar.css'
function Navbar() {
  return (
    <div className="navigation">
         <div className="logo">
            <h1><span><PiShoppingCartThin /></span>.novaSHOP</h1>
        </div>
        <div>
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
            <li>Checkout</li>
            <li>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar