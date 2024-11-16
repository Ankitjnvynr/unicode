"use client"
import React, { useState } from 'react';
import { LuSendHorizonal } from "react-icons/lu";

const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex p-4 border-t border-gray-700 bg-gray-800 ">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Type a message..."
        className="flex-1 p-2 bg-gray-700 text-white border-none rounded-l-lg focus:outline-none placeholder-gray-400"
      />
      <button
        onClick={handleSend}
        className="px-4 bg-black text-white  rounded-r-lg hover:bg-gray-950"
      >
        <LuSendHorizonal fontWeight={5} />
      </button>
    </div>
  );
};

export default ChatInput;
