import React from 'react';

const ChatSidebar = ({ chats, onSelectChat }) => {
  return (
    <div className="w-64 border border-gray-900 h-full flex flex-col bg-gray-900/5 text-white">
      <h2 className="text-lg font-semibold p-4">Chats</h2>
      <div className="inputBox">
        <input className='bg-gray-800 p-3 w-full rounded-lg' placeholder='Search ...' type="text" />
      </div>
      <div className="overflow-y-auto flex-1">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className="flex items-center p-4  hover:bg-gray-800 w-full"
          >
            <img
              src={chat.avatar}
              alt={`${chat.name}'s avatar`}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="text-sm font-semibold">{chat.name}</h3>
              <p className="text-xs text-gray-400 truncate">{chat.lastMessage}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
