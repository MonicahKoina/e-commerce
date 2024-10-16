import React from "react";
import { FaShopify } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiShop } from "react-icons/ci";

function Navbar() {
  return (
    <nav>
      <div className="navigation">
        <div className="logo">
          <Link to="/" className="nav-link">
            <h1>
              <FaShopify />
              .novaSHOP
            </h1>
          </Link>
        </div>
        <div className="nav-search">
          <form>
          <CiSearch className="search"/>
            <input type="text" placeholder="Search products on nova" />
          </form>
        </div>
        <div className="navigation-links">
          <Link to="/Shop" className="nav-link">
            <div className="icons">
            <CiShop />Shop
              </div>
          </Link>
          <Link to="/Cart" className="nav-link">
           <div className="icons">
           <IoCartOutline />Cart
            </div> 
            
          </Link>
          <Link to="/Login" className="nav-link">
          <div className="account">
          Login | Register
            </div>
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
