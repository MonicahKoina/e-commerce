import React from "react";
import { FaShopify } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";

import "./Navbar.css";
function Navbar() {
  return (
    <div className="navigation">
      <div className="logo">
        <h1>
          <FaShopify />
          .novaSHOP
        </h1>
      </div>
      <div className="nav-search">
        <button>
          <CiSearch />
          Search products and categories
        </button>
        <button>Search</button>
      </div>
      <div className="navigation-links">
        <ul>
          <li>
            <VscAccount />
            Account
          </li>
          <li>
            <IoCartOutline />
            Cart
          </li>
          <li>
            <IoMdHelpCircleOutline />
            Help
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
