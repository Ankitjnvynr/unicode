"use client"

import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatWindow from './ChatWindow';

const ChatContainer = () => {
  const [activeChatId, setActiveChatId] = useState(null);
  const [chats] = useState([
    { id: 1, name: 'John Doe', avatar: '/user/userdefault.png', lastMessage: 'Hello!' },
    { id: 2, name: 'Jane Smith', avatar: '/user/userdefault.png', lastMessage: 'How are you?' },
    { id: 3, name: 'Jane Smith', avatar: '/user/userdefault.png', lastMessage: 'How are you?' },
    { id: 4, name: 'Jane Smith', avatar: '/user/userdefault.png', lastMessage: 'How are you?' },
    { id: 5, name: 'Jane Smith', avatar: '/user/userdefault.png', lastMessage: 'How are you?' },
    { id: 6, name: 'Jane Smith', avatar: '/user/userdefault.png', lastMessage: 'How are you?' },
    { id: 7, name: 'Jane Smith', avatar: '/user/userdefault.png', lastMessage: 'How are you?' },
    { id: 8, name: 'Jane Smith', avatar: '/user/userdefault.png', lastMessage: 'How are you?' },
    
  ]);
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'Hello, John!' },
    { sender: 'friend', text: 'Hey there!' },
  ]);

  const handleSelectChat = (chatId) => {
    setActiveChatId(chatId);
    // Load messages for the selected chat here
  };

  const handleSendMessage = (messageText) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: messageText },
    ]);
  };

  return (
    <div className="flex h-full ">
      <ChatSidebar chats={chats} onSelectChat={handleSelectChat} />
      <div className="flex-1">
        {activeChatId ? (
          <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatContainer;
