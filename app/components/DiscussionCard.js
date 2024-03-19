import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { BiComment } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";

const DiscussionCard = ({
  photo,
  username,
  sector,
  time,
  description,
  like,
  views,
  comments,
}) => (
  <div className="flex bg-white mt-10 w-full rounded-lg overflow-hidden shadow-xl">
    <div className="flex items-start px-4 py-6">
      <Image
        width={60}
        height={60}
        className="
        rounded-full
        object-cover
        bg-gray-300
        w-16
        h-16
        flex-shrink-0
        mr-4
      "
        src={photo}
        alt={username}
      />

      <div className="">
        <div className="flex items-center justify-between">
          <p className="text-md md:text-lg font-semibold text-gray-900 mt-3">
            {username}
            <span className="inline-block text-sm ml-4 md:py-1 px-2.5 rounded-full bg-blue-950 text-white">
              {sector}
            </span>
          </p>

          <small className="text-xs mt-3 md:text-sm md:-mt-6 text-blue-700">
            {time}
          </small>
        </div>
        <p className="mt-3 text-gray-700 text-md">{description}</p>
        <div className="mt-4 grid grid-cols-12 items-center">
          <div className="flex col-span-3 flex-row text-xl">
            <FaRegHeart className="flex-1 mt-1 text-black text-xl" />
            <p className="flex-1 text-lg">{like}</p>
          </div>
          <div className="flex col-span-3 text-x">
            <FiEye className="flex-1 mt-1 text-black text-xl" />
            <p className="flex-1 text-lg">{views}</p>
          </div>
          <div className="flex col-span-3 flex-row text-xl items-center">
            <BiComment className="flex-1 mt-1 text-black text-xl" />
            <p className="flex-1 text-md text-sm">{comments} comments</p>
          </div>
          <div className="flex col-span-3 flex-row text-xl">
            <FiShare2 className="flex-1 mt-1 text-black text-xl" />
            <p className="flex-1 text-lg">Share</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DiscussionCard;
