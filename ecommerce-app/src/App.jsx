import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { HiOutlineSearch } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

function App() {
  return (
    <div className="bg-[#f5f5f5] h-screen">
      <div className="header flex bg-black  justify-between items-center  text-white px-[3rem]">
        <div className="text-white font-semibold w-[500px] ">
          We Offer Free Shipping
        </div>
        <div className="header-item-cont flex gap-2 items-center  ">
          <span>
            <FaLocationDot />
          </span>
          <span>Location</span>
        </div>
        <div className="header-item-cont">
          <select className="border rounded p-1 border-none bg-black">
            {/* <option value="">Select a country</option> */}
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        <div className="header-item-cont">
          <span>My Account</span>
        </div>
      </div>
      <div className="Navbar flex justify-around bg-white h-[5rem] font-semibold  items-center border-2">
        <div className="navhead border w-[280px] text-4xl flex justify-end items-center">
          wc
        </div>
        <div className="navbar-list-items ">
          <ul className="flex justify-between gap-20">
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <ul className="flex text-3xl justify-between gap-8">
          <li>
            <HiOutlineSearch />
          </li>
          <li>
            <AiOutlineShoppingCart />
          </li>
          <li className="">
            <BsPersonFill />
            {/* <MdOutlineKeyboardArrowUp /> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
