"use client";

import { useState } from "react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { MdMessage } from "react-icons/md";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { VscTriangleRight } from "react-icons/vsc";
import { BiSolidUser } from "react-icons/bi";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
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
        <div className="flex items-center justify-between p-5 w-60">
          <div className="flex items-center">
            <div className=" w-8 h-8 rounded-full">
              <BiSolidUser className="text-3xl" />
            </div>
            <span className="mx-3 font-semibold text-lg">Hello, User</span>
          </div>
          <FiBell className="text-2xl" />
        </div>
        <hr className="my-2 border-gray-500" />
        <div className="">
          <div className="flex items-center py-2 bg-indigo-950 pl-4">
            <MdMessage className="text-2xl mx-1" />
            <span className="mr-9">Discussion Forum</span>
            <FiChevronDown />
          </div>
          <div className="flex items-center py-2 pl-4">
            <FaCircleDollarToSlot className="text-2xl mx-1" />
            <span className="mr-2">Market Stories</span>
          </div>
          <div className="flex items-center py-2 pl-4">
            <span className="mr-2">Sentiment</span>
          </div>
          <div className="flex items-center py-2 pl-4">
            <span className="mr-2">Market</span>
          </div>
          <div className="flex items-center py-2 pl-4">
            <span className="mr-2">Sector</span>
          </div>
          <div className="flex items-center py-2 pl-4">
            <span className="mr-2">Watchlist</span>
          </div>
          <div className="flex items-center py-2 pl-4">
            <span className="mr-2">Events</span>
          </div>
          <div className="flex items-center py-2 pl-4">
            <span className="mr-2">News/Interview</span>
          </div>
        </div>
      </div>
      <div className={`absolute ${isOpen ? "mx-60" : "mx-0"} my-64`}>
        <button className="bg-sky-900 py-10" onClick={toggle}>
          <VscTriangleRight font-size={20} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
