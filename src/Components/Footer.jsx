import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
        <div className="about-us">
            <h2>About us</h2>
            <ul>
                <li>Blog</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
        </div>
        <div className="customer-service">
            <h2>Customer Service</h2>
            <ul>
                <li>Contact Us</li>
                <li>Return Policy</li>
            </ul>
        </div>
        <div className="follow">
            <h2>Follow Us</h2>
            <p><FaFacebook />
            Facebook<br></br>
            <FaInstagram />Instagram<br></br>
            <FaXTwitter />Twitter</p>
        </div>
    </div>
  )
}

export default Footer