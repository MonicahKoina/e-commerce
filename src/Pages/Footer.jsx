import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className='bg-yellow-100 w-full flex justify-evenly'>
      <div className='leading-7' >
        <h2 className='font-medium my-1'>Contact Us</h2>
        <p className='flex items-center gap-1'><HiOutlineMail />novashop@gmail.com</p>
        <p className='flex items-center gap-1'><FaPhoneAlt />+254712458965</p>
        <p className='flex items-center gap-1'><CiLocationOn />Nairobi,Kenya</p>
      </div>
      <div>
        <h2 className='font-medium my-1'>Information</h2>
        <p>About us</p>
        <p>Careers</p>
        <p>Privacy Policy</p>
        <p>Terms and condition</p>
      </div>
      <div className='leading-7'>
        <h2 className='font-medium my-1'>Follow us</h2>
        <p className='flex items-center'><FaFacebook />Facebook</p>
        <p className='flex items-center'><RiInstagramFill />instagram</p>
        <p className='flex items-center'><RiTwitterXFill/>twitter</p>
      </div>
    </footer>
  )
}

export default Footer