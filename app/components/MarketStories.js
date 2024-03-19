import React from "react";
import Image from "next/image";

const marketStoriesData = [
  {
    id: 1,
    title: "Market Story 1",
    imageSrc: "/images/marketsix.jpg",
    description:
      "Cras cursus enim viverra purus lobortis sollicitudin. Cras tellus est!",
  },
  {
    id: 2,
    title: "Market Story 2",
    imageSrc: "/images/marketfive.jpg",
    description:
      "Cras cursus enim viverra purus lobortis sollicitudin. Cras tellus est!",
  },
  {
    id: 3,
    title: "Market Story 3",
    imageSrc: "/images/marketfour.jpg",
    description:
      "Cras cursus enim viverra purus lobortis sollicitudin. Cras tellus est!",
  },
  {
    id: 4,
    title: "Market Story 4",
    imageSrc: "/images/marketthree.jpg",
    description:
      "Cras cursus enim viverra purus lobortis sollicitudin. Cras tellus est!",
  },
  {
    id: 5,
    title: "Market Story 5",
    imageSrc: "/images/markettwo.jpg",
    description:
      "Cras cursus enim viverra purus lobortis sollicitudin. Cras tellus est!",
  },
  {
    id: 6,
    title: "Market Story 6",
    imageSrc: "/images/marketone.jpg",
    description:
      "Cras cursus enim viverra purus lobortis sollicitudin. Cras tellus est!",
  },
];

const MarketStories = () => {
  return (
    <>
      <div className="p-4 text-red-700 text-xl">MARKET STORIES</div>
      <div className="grid lg:grid-cols-2 ">
        {marketStoriesData.map((story) => (
          <div
            key={story.id}
            className="m-6 md:m-3 relative overflow-hidden rounded-lg bg-cover bg-no-repeat border-2 border-gray-300 hover:transform hover:scale-105 transition-transform"
          >
            <Image
              width={600}
              height={200}
              src={story.imageSrc}
              className="w-full align-middle"
              alt="Error"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-bold">{story.title}</h3>
              <p className="text-sm">{story.description}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default MarketStories;
