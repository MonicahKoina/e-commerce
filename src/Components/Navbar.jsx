import React from "react";
import { FaShopify } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

function Navbar() {
  return (
    <nav
      className="w-full  px-3
      flex items-center justify-between h-20  mx-auto md:w-[95%]  border-b-2 border-b-black "
    >
      <Link to="/" className=" flex flex-row-reverse items-end text-sm  ">
        <h1 className="hidden md:inline">.novaSHOP</h1>
        <FaShopify size={28} className="" />
      </Link>
      <form className="md:w-1/4  h-8 relative">
        <CiSearch className="absolute right-2 top-2 " />
        <input
          className="text-sm md:text-md w-full border-2 border-opacity-90 border-yellow-200 leading-8 rounded-md pl-3  outline-0"
          type="text"
          placeholder="Search products"
        />
      </form>
      <img className="w-10 md:hidden" src="/burger.svg" alt="" />
      <div className="hidden md:flex justify-around w-1/3">
        <Link to="/Shop" className="flex items-center gap-1 ">
          <p className="">Wishlist</p>
          <FaRegHeart />
        </Link>

        <Link to="/Shop" className="flex items-center gap-1 ">
          <p className="">my cart</p>
          <IoCartOutline />
        </Link>
        <Link to="/Login" className="nav-link">
          <div className="account">Login</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
