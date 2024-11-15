import React, { useState } from 'react';
import { BsCheck, BsCheckAll, BsChatDots } from 'react-icons/bs'; // Import single, double tick, and new chat icons

const ChatSidebar = ({ chats, onSelectChat }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtered chats based on search term
  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-80 border-r border-gray-800 h-full flex flex-col bg-gray-900 text-white">
      <h2 className="text-lg font-semibold p-4 flex justify-between items-center">
        Chats
        <button className="text-gray-400 hover:text-white">
          <BsChatDots size={20} />
        </button>
      </h2>
      
      <div className="p-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="bg-gray-800 p-3 w-full rounded-lg placeholder-gray-400 text-white focus:outline-none"
        />
      </div>

      <div className="overflow-y-auto flex-1">
        {filteredChats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className="flex items-center p-4 hover:bg-gray-800 w-full"
          >
            <img
              src={chat.avatar}
              alt={`${chat.name}'s avatar`}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="flex-1 text-left">
              <h3 className="text-sm font-semibold">{chat.name}</h3>
              <p className="text-xs text-gray-400 truncate flex items-center">
                {chat.seen ? (
                  <BsCheckAll className="mr-1 text-blue-500" /> // Double tick for seen
                ) : (
                  <BsCheck className="mr-1 text-gray-400" /> // Single tick for unread
                )}
                {chat.lastMessage}
              </p>
            </div>
            <span className="text-xs text-gray-400">{chat.time}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
