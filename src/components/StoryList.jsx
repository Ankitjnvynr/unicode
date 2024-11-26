
"use client"
import React, { useState } from 'react';

const stories = [
  { id: 1, name: 'A', image: 'path-to-image1.jpg', viewed: false },
  { id: 2, name: 'B', image: 'path-to-image2.jpg', viewed: false },
  { id: 3, name: 'C', image: 'path-to-image3.jpg', viewed: true },
  { id: 4, name: 'D', image: 'path-to-image4.jpg', viewed: true },
  { id: 5, name: 'E', image: 'path-to-image5.jpg', viewed: false },
  { id: 6, name: 'F', image: 'path-to-image6.jpg', viewed: true },
  { id: 7, name: 'G', image: 'path-to-image7.jpg', viewed: false },
  { id: 8, name: 'H', image: 'path-to-image8.jpg', viewed: true },
];

const StoryList = () => {
  const [storyState, setStoryState] = useState(stories);

  const handleStoryClick = (id) => {
    setStoryState((prevState) =>
      prevState.map((story) =>
        story.id === id ? { ...story, viewed: true } : story
      )
    );
  };

  return (
    <div className="flex overflow-x-auto space-x-6 py-1 scrollbar-hide">
      {storyState.map((story) => (
        <div
          key={story.id}
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => handleStoryClick(story.id)}
        >
          <div
            className={`w-16 h-16 rounded-full border-2 overflow-hidden ${
              story.viewed ? 'border-gray-500' : 'border-pink-500'
            }`}
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-white text-xs text-center truncate w-20">
            {story.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StoryList;
