"use client";
import React, { useState } from 'react';

const events = [
  {
    title: 'The Food Festival Glasgow & Indoor Lifestyle Exhibition',
    date: 'Sun, 29 Oct',
    time: '10:00 AM - 8:00 PM',
    location: 'Glasgow',
    eventType: 'Food & Drink',
    price: '£25',
    image: '/pngtree-majestic-volcano-eruption-at-twilight-image_16213116.jpg'
  },
  {
    title: 'Manchester Coffee Festival 2024',
    date: 'Thu, 20 Jan',
    time: '10:00 AM - 4:00 PM',
    location: 'Manchester',
    eventType: 'Food & Drink',
    price: '£12',
    image: '/pexels-tahir-shaw-50609-205410.jpg'
  },
  {
    title: 'ACC | Christmas Movies',
    date: 'Wed, 15 Dec',
    time: '6:00 PM - 10:00 PM',
    location: 'ACC Theatre',
    eventType: 'Entertainment',
    price: '£10',
    image: '/pngtree-majestic-volcano-eruption-at-twilight-image_16213116.jpg'
  },
  {
    title: 'Mischief | Christmas Standing Special - FINAL 60 TICKETS',
    date: 'Fri, 22 Dec',
    time: '8:00 PM - 11:00 PM',
    location: 'Manchester',
    eventType: 'Entertainment',
    price: '£30',
    image: '/pexels-tahir-shaw-50609-205410.jpg'
  },
];

const Event = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterType, setFilterType] = useState("All Types");

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsOpen(false);
  };

  const handleFilterTypeChange = (type) => {
    setFilterType(type);
  };

  const filteredEvents = events.filter((event) => {
    if (filterType === "All Types") return true;
    return event.eventType === filterType;
  });

  const filterTypes = ["All Types", "Food & Drink", "Entertainment", "Business & Conference", "Arts & Performance", "Comedy"];

  return (
    <div className="flex flex-col items-center w-full gap-4 p-4 min-h-screen">
      <h1 className="text-xl font-bold mb-4 text-center text-white">Events</h1>

      {/* Category Filter */}
      <div className="flex overflow-x-auto whitespace-nowrap mb-8 space-x-4 px-2 sm:px-4 scrollbar-hide scroll-smooth w-full ">
        {filterTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleFilterTypeChange(type)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 font-medium transition duration-300
              ${filterType === type ? "bg-gray-800 text-white border-l-2 border-r-2 border-white" : "bg-gray-800 hover:bg-gray-700 text-gray-400"}
            `}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl px-2 sm:px-0">
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-800"
            onClick={() => openModal(event)}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4 text-white">
              <h2 className="text-lg font-semibold">{event.title}</h2>
              <p className="text-gray-400 text-sm sm:text-base">{event.date} | {event.time}</p>
              <p className="text-gray-400 text-sm sm:text-base">{event.location} - {event.eventType}</p>
              <p className="text-blue-400 font-bold">{event.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative p-4 bg-black rounded-lg shadow-lg max-w-lg w-full mx-2">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center font-bold"
            >
              &times;
            </button>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-auto object-contain rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold mb-2 text-white">{selectedEvent.title}</h2>
            <p className="text-gray-400 mb-1 text-sm sm:text-base"><strong>Date:</strong> {selectedEvent.date}</p>
            <p className="text-gray-400 mb-1 text-sm sm:text-base"><strong>Time:</strong> {selectedEvent.time}</p>
            <p className="text-gray-400 mb-1 text-sm sm:text-base"><strong>Location:</strong> {selectedEvent.location}</p>
            <p className="text-gray-400 mb-1 text-sm sm:text-base"><strong>Type:</strong> {selectedEvent.eventType}</p>
            <p className="text-blue-400 font-bold text-sm sm:text-base"><strong>Price:</strong> {selectedEvent.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
