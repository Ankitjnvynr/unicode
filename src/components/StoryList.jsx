
"use client"
import React, { useState } from 'react';

const placeholderImage = 'https://via.placeholder.com/150';

const stories = [
  { id: 1, name: 'A', image: placeholderImage, viewed: false },
  { id: 2, name: 'B', image: placeholderImage, viewed: false },
  { id: 3, name: 'C', image: placeholderImage, viewed: true },
  { id: 4, name: 'D', image: placeholderImage, viewed: true },
  { id: 5, name: 'E', image: placeholderImage, viewed: false },
  { id: 6, name: 'F', image: placeholderImage, viewed: true },
  { id: 7, name: 'G', image: placeholderImage, viewed: false },
  { id: 8, name: 'H', image: placeholderImage, viewed: true },
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
    <div className="flex max-w-screen overflow-x-auto space-x-6 py-1 scrollbar-hide">
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
