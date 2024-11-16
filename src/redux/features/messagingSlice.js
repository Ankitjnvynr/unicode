// src/features/messagingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeChatId: null,
  chats: [
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
  ],
  messages: {
    1: [
      { sender: 'user', text: 'Hello, John!' },
      { sender: 'friend', text: 'Hey there!' },
    ],
    2: [
      { sender: 'friend', text: 'How are you?' },
      { sender: 'user', text: 'I am fine, thank you!' },
    ],
    // Additional messages for each chat
  },
};

const messagingSlice = createSlice({
  name: 'messaging',
  initialState,
  reducers: {
    selectChat: (state, action) => {
      state.activeChatId = action.payload;
    },
    sendMessage: (state, action) => {
      const { chatId, messageText } = action.payload;
      const message = { sender: 'user', text: messageText };
      if (state.messages[chatId]) {
        state.messages[chatId].push(message);
      } else {
        state.messages[chatId] = [message];
      }
      // Update the lastMessage and time in the chat list
      const chat = state.chats.find(chat => chat.id === chatId);
      if (chat) {
        chat.lastMessage = messageText;
        chat.time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }
    },
  },
});

export const { selectChat, sendMessage } = messagingSlice.actions;
export default messagingSlice.reducer;
