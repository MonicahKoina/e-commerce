import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer>
    <div className="footer">
      <div className="footer-content">
        <h2>About us</h2>
        <ul>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="footer-content">
        <h2>Customer Service</h2>
        <ul>
          <li>Contact Us</li>
          <li>Return Policy</li>
        </ul>
      </div>
      <div className="footer-content">
        <h2>Follow Us</h2>
        <ul>
        <li>
          <FaFacebook />
          Facebook
        </li>
        <li>
          <FaInstagram />
          Instagram
        </li>
        <li>
          <FaXTwitter />
          Twitter
        </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer