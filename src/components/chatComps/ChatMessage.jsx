"use client"
import React from 'react';

const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`p-3 m-2 rounded-lg max-w-xs ${
          isUser ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200'
        }`}
      >
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
