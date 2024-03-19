"use client";
import React, { useState } from 'react';
import DiscussionForum from './components/DiscussionForum';
import MarketStories from './components/MarketStories';
import Sidebar from './components/Sidebar';

function Home() {
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setCurrentTab(tabIndex);
    console.log('Tab changed to:', tabIndex);
  };

  const TabButton = ({ index, text }) => (
    <button
      style={{
        border: 'none',
        borderBottom: currentTab === index ? '3px solid red' : 'none',
        padding: '8px 16px',
        backgroundColor: currentTab === index ? '#132841' : '#1d3b63',
        color: 'white',
      }}
      className="py-2 w-1/2 flex-1"
      onClick={() => handleTabChange(index)}
    >
      {text}
    </button>
  );

  return (
    <>
    <Sidebar />
      <div className="w-full md:hidden">
        <div className="items-center justify-center mb-2 flex flex-row ">
          <TabButton index={1} text="Discussion Forum" />
          <TabButton index={2} text="Market Stories" />
        </div>
        {currentTab === 1 && <DiscussionForum />}
        {currentTab === 2 && <MarketStories />}
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-8 mx-2">
          <DiscussionForum />
        </div>
        <div className="md:col-span-4 mx-2">
          <MarketStories />
        </div>
      </div>
    </>
  );
}

export default Home;
