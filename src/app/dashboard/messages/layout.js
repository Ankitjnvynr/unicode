"use client"

import { ChatSidebar } from '@/components';
import React, { useState } from 'react'

export default function MessageLayout({ children }) {


  const [activeChatId, setActiveChatId] = useState(null);
  const [chats] = useState([
    { id: 1, name: 'Rajesh Kumar', avatar: '/user/userdefault.png', lastMessage: 'Hello!', time: '16:27', seen: true },
    { id: 2, name: 'Anita Sharma', avatar: '/user/userdefault.png', lastMessage: 'How are you?', time: '15:45', seen: false },
    { id: 3, name: 'Vikas Patel', avatar: '/user/userdefault.png', lastMessage: 'Let’s catch up soon!', time: '14:30', seen: true },
    { id: 4, name: 'Priya Singh', avatar: '/user/userdefault.png', lastMessage: 'Meeting at 5?', time: '13:15', seen: false },
    { id: 5, name: 'Amitabh Joshi', avatar: '/user/userdefault.png', lastMessage: 'Sure!', time: '12:10', seen: true },
    { id: 6, name: 'Sneha Mehta', avatar: '/user/userdefault.png', lastMessage: 'On my way!', time: '11:00', seen: true },
    { id: 7, name: 'Ravi Gupta', avatar: '/user/userdefault.png', lastMessage: 'See you tomorrow!', time: '10:45', seen: false },
    { id: 8, name: 'Sana Khan', avatar: '/user/userdefault.png', lastMessage: 'Can we reschedule?', time: '09:30', seen: true },
    { id: 9, name: 'Manoj Verma', avatar: '/user/userdefault.png', lastMessage: 'Got it, thanks!', time: '08:50', seen: false },
    { id: 10, name: 'Pooja Iyer', avatar: '/user/userdefault.png', lastMessage: 'Let’s discuss.', time: '07:25', seen: true },
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
    <div className='flex flex-col h-[100%] '>
      <div className="flex flex-1 h-[90vh]  ">
      <ChatSidebar chats={chats} onSelectChat={handleSelectChat} />
      <div className="flex-1">

        {children}
      </div>

      </div>
    </div>
  )
}
