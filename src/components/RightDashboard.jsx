"use client"
import React, { useState, useEffect } from 'react';

const RightDashboard = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [suggestedAccounts, setSuggestedAccounts] = useState([]);

  // Simulate fetching data from the backend
  useEffect(() => {
    const fetchSuggestedAccounts = async () => {
      // Simulating a backend API call
      const placeholderImage = 'https://via.placeholder.com/150';

      const fetchedAccounts = [
        { id: 1, name: 'john_doe', image: placeholderImage },
        { id: 2, name: 'jane_smith', image: placeholderImage },
        { id: 3, name: 'alex_king', image: placeholderImage },
        { id: 4, name: 'linda_brown', image: placeholderImage },
        { id: 5, name: 'chris_lee', image: placeholderImage },
      ];
      

      setSuggestedAccounts(fetchedAccounts);
    };

    fetchSuggestedAccounts();
  }, []); // Runs once when the component mounts

  return (
    <div className="w-full  h-full    text-white  flex flex-col ">
      {/* Header Section */}
      <div className="p-1  h-28 flex-col ">
        {/* <h1 className="text-xl font-bold mb-2">00:00:00</h1> */}
        <div className="flex  mt-10 rounded-md ">
          <button
            className={`w-1/2 py-1 text-xs ${
              activeTab === 'discover'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-900 text-gray-400'
            }`}
            onClick={() => setActiveTab('discover')}
          >
            Discover
          </button>
          <button
            className={`w-1/2 py-1 text-xs ${
              activeTab === 'notifications'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-900 text-gray-400'
            }`}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </button>
        </div>
      </div>

      {/* Suggested Accounts Section */}
      <div className="p-4 flex-grow overflow-y-scroll scrollbar-hide">
        <h2 className="text-lg font-sm mb-4">Suggested Accounts</h2>
        <ul className="space-y-4">
          {suggestedAccounts.map((account) => (
            <li key={account.id} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden">
                <img
                  src={account.image}
                  alt={account.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="truncate">{account.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightDashboard;
