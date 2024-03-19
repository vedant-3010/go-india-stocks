"use client";

import { useState } from "react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Tulpen_One } from "next/font/google";
import { MdMessage } from "react-icons/md";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { VscTriangleRight } from "react-icons/vsc";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className={`bg-blue-950 text-white h-screen fixed 
      ${
        isOpen
          ? "translate-x-0 ease-out md:col-span-6 "
          : "-translate-x-full ease-in hidden  "
      } 
      fixed  left-0 transition-transform duration-300 transform lg:fixed lg:translate-x-0`}
      >
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <span className="mx-3 font-semibold text-lg">Hello, User</span>
          </div>
          <FiBell className="text-2xl" />
        </div>
        <hr className="my-2 border-gray-500" />
        <div className="pl-4">
          <div className="flex items-center py-2">
            <MdMessage className="text-2xl mx-1" />
            <span className="mr-2">Discussion Forum</span>
            <FiChevronDown />
          </div>
          <div className="flex items-center py-2">
            <FaCircleDollarToSlot className="text-2xl mx-1" />
            <span className="mr-2">Market Stories</span>
          </div>
          <div className="flex items-center py-2">
            <span className="mr-2">Sentiment</span>
          </div>
          <div className="flex items-center py-2">
            <span className="mr-2">Market</span>
          </div>
          <div className="flex items-center py-2">
            <span className="mr-2">Sector</span>
          </div>
          <div className="flex items-center py-2">
            <span className="mr-2">Watchlist</span>
          </div>
          <div className="flex items-center py-2">
            <span className="mr-2">Events</span>
          </div>
          <div className="flex items-center py-2">
            <span className="mr-2">News/Interview</span>
          </div>
        </div>
      </div>
      <div className={`absolute ${isOpen ? "mx-52" : "mx-0"} my-64`}>
        <button className="bg-sky-900 py-10" onClick={toggleSidebar}>
          <VscTriangleRight font-size={20} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
