import React from "react";
import discussions from "../data/data";
import DiscussionCard from "./DiscussionCard";

const DiscussionForum = () => (
  <div className="w-full">
    <div className="md:pl-20 py-4 text-red-800 text-xl font-bold bg-gray-200  hidden sm:block w-1/2">
      DISCUSSION FORUM
    </div>
    <div>
      {discussions.map((discussion, index) => (
        <DiscussionCard key={index} {...discussion} />
      ))}
    </div>
  </div>
);

export default DiscussionForum;
