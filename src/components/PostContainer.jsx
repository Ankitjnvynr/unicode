"use client"
import React, { useState } from 'react';

// Dummy placeholder image URL
const placeholderAvtar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadoo9vMoUp-gpiYvACud6oHMkQCQMtTrRhPnidw2EygNgaN_J_LGkrg9L3R4F2WW2-iU&usqp=CAU';
const placeholderImage = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';

// Posts data array
const postsData = [
  {
    id: 1,
    username: 'Abc',
    profilePic: placeholderAvtar, // Placeholder for profile picture
    isVerified: true,
    postType: 'image',
    content: placeholderImage, // Placeholder for post image
    caption: 'Abc',
    likes: 47229,
    commentsCount: 289,
    timestamp: '1d',
  },
  {
    id: 2,
    username: 'ABC',
    profilePic: placeholderAvtar,
    isVerified: false,
    postType: 'video',
    content: placeholderImage, // Placeholder for post video
    caption: 'Stay motivated and keep pushing forward!',
    likes: 30014,
    commentsCount: 156,
    timestamp: '2d',
  },
  {
    id: 3,
    username: 'daily_quotes',
    profilePic: placeholderAvtar,
    isVerified: false,
    postType: 'image',
    content: placeholderImage, // Another placeholder for image
    caption: 'Believe in yourself and you are halfway there.',
    likes: 15400,
    commentsCount: 120,
    timestamp: '3d',
  },
];

const PostContainer = () => {
  const [posts, setPosts] = useState(postsData);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="flex flex-col items-center space-y-6 bg-black py-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-full max-w-lg bg-[#1b1b1b] text-white rounded-lg overflow-hidden shadow-lg"
        >
          {/* Header */}
          <div className="flex items-center px-4 py-3 border-b border-gray-800">
            <img
              src={post.profilePic}
              alt={post.username}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <div className="flex items-center space-x-1">
                <p className="font-bold">{post.username}</p>
                {post.isVerified && (
                  <span className="text-blue-500 text-xs"></span>
                )}
              </div>
              <p className="text-xs text-gray-400">{post.timestamp}</p>
            </div>
          </div>

          {/* Post Content */}
          <div>
            {post.postType === 'image' ? (
              <img
                src={post.content || placeholderImage} // Placeholder for missing image
                alt="Post Content"
                className="w-full h-auto"
              />
            ) : (
              <video
                controls
                src={post.content || placeholderImage} // Placeholder for missing video
                className="w-full h-auto"
              ></video>
            )}
          </div>

          {/* Caption */}
          <div className="px-4 py-2">
            <p className="text-sm">{post.caption}</p>
          </div>

          {/* Interaction Buttons */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-gray-800">
            <div className="flex space-x-4">
              <button
                onClick={() => handleLike(post.id)}
                className="flex items-center space-x-1"
              >
                <span>❤️</span>
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-1">
                <span>💬</span>
                <span>{post.commentsCount}</span>
              </button>
              <button className="flex items-center space-x-1">
                <span>📤</span>
                <span>Share</span>
              </button>
            </div>
            <button className="text-gray-400">...</button>
          </div>

          {/* Comment Section */}
          <div className="px-4 py-2 border-t border-gray-800">
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full bg-[#1b1b1c] text-gray-400 p-2 rounded-lg focus:outline-none text-sm"
              style={{
                fontSize:12
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
