"use client";
import React, { useState } from 'react';

const events = [
  {
    title: 'The Halal Food Festival Glasgow & Indoor Lifestyle Exhibition',
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
    image: '/path/to/image3.jpg'
  },
  {
    title: 'Mischief | Christmas Standing Special - FINAL 60 TICKETS',
    date: 'Fri, 22 Dec',
    time: '8:00 PM - 11:00 PM',
    location: 'Manchester',
    eventType: 'Entertainment',
    price: '£30',
    image: '/path/to/image4.jpg'
  },
  // Add more events as needed
];

const Event = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterDate, setFilterDate] = useState("all");

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsOpen(false);
  };

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

  const filteredEvents = events.filter((event) => {
    if (filterDate === "all") return true;
    return event.date.includes(filterDate);
  });

  return (
    <div className="flex flex-col items-center w-full gap-4 p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">Events</h1>

      {/* Date Filter Dropdown */}
      <div className="mb-8">
        <label className="text-white mr-2">Filter by Date:</label>
        <select
          value={filterDate}
          onChange={handleFilterChange}
          className="p-2 bg-gray-800 text-white rounded"
        >
          <option value="all">All Dates</option>
          <option value="Oct">October</option>
          <option value="Nov">November</option>
          <option value="Dec">December</option>
          <option value="Jan">January</option>
          {/* Add more months or specific dates if needed */}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-800"
            onClick={() => openModal(event)}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4 text-white">
              <h2 className="text-lg font-semibold">{event.title}</h2>
              <p className="text-gray-400">{event.date} | {event.time}</p>
              <p className="text-gray-400">{event.location} - {event.eventType}</p>
              <p className="text-blue-400 font-bold">{event.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative p-4 bg-black rounded-lg shadow-lg max-w-lg w-full">
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
            <p className="text-gray-400 mb-1"><strong>Date:</strong> {selectedEvent.date}</p>
            <p className="text-gray-400 mb-1"><strong>Time:</strong> {selectedEvent.time}</p>
            <p className="text-gray-400 mb-1"><strong>Location:</strong> {selectedEvent.location}</p>
            <p className="text-gray-400 mb-1"><strong>Type:</strong> {selectedEvent.eventType}</p>
            <p className="text-blue-400 font-bold"><strong>Price:</strong> {selectedEvent.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
