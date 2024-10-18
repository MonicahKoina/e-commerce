import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiDollarCircle } from "react-icons/bi";
import { AiFillCreditCard } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <>
      <div>
        <div className="flex justify-evenly flex-wrap bg-yellow-500 w-[80%] mx-[10%] p-10 my-7">
          <div className= "leading-10 w-1/2 p-8 text-3xl text-white">
          <h1 classNam>Summer savings</h1>
          <p>Upto 80% off</p>
          <button className="flex justify-center w-1/2 bg-orange-600 rounded-full mt-4">SHOP NOW
            <FaArrowRight className="m-1"/></button>
          </div>
          <div>
            <img 
            src="/happy.jpeg" alt="" />
          </div>
        </div>
        <div className="mx-[10%] w-[80%] flex justify-between bg-yellow-100 p-10">
          <div >
          <CiDeliveryTruck />
          <h4>Free Shipping</h4>
          <p>On all oder over $200</p>
          </div>
          <div>
          <BiDollarCircle />
          <h4>Money Guarantee</h4>
          <p>30 Days money back</p>
          </div>
          <div>
          <AiFillCreditCard />
          <h4>Payment Secured</h4>
          <p>Secure your payments</p>
          </div>
          <div>
          <RiCustomerService2Fill />
          <h4>Power Support</h4>
          <p>Online support 24/7</p>
          </div>
        </div>
        <div className="w-1/2 flex mx-[28%] my-10">
        <div className="bg-pink-50 flex flex-wrap ">
          <img className="w-1/2" src="/men3.jpg" alt="" />
          <img className="w-1/2" src="bag2.jpg" alt="" />
          <img className=" w-1/2" src="/electronics.jpeg" alt="" />
          <img  className="w-1/2" src="/shoe.jpg" alt="" />
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;
