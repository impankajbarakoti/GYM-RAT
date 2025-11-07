import React from 'react';
import { Clock } from 'lucide-react';

// Data structure for the events
const events = [
  {
    date: 'November 6, 2025',
    name: 'DECATHLON EVENT',
    time: '12:00 am to 04:30 am',
    organizer: 'Aslan Lingker',
  },
  {
    date: 'November 6, 2025',
    name: 'CELERITY SPORTS EVENT',
    time: '08:20 am to 09:50 am',
    organizer: 'Aslan Lingker',
  },
  {
    date: 'November 6, 2025',
    name: 'TWINKLE',
    time: '08:25 am to 09:25 am',
    organizer: 'Aslan Lingker',
  },
];

// Reusable component for a single event column
const EventItem = ({ date, name, time, organizer }) => (
  <div className="flex flex-col justify-center p-4 md:p-8 w-full md:w-1/3 min-h-[150px]">
    {/* Date and Clock Icon */}
    <div className="flex items-center text-gray-400 mb-2 text-sm">
      <Clock className="w-4 h-4 mr-2" />
      <span>{date}</span>
    </div>

    {/* Event Name */}
    <h3 className="text-sm md:text-xl font-semibold text-white mb-2 tracking-wider">
      {name}
    </h3>

    {/* Time */}
    <p className="text-lg font-medium text-white mb-1">
      {time}
    </p>

    {/* Organizer/Host */}
    <p className="text-red-500 text-sm font-medium">
      {organizer}
    </p>
  </div>
);

// Main component
const EventScheduleBanner = () => {
  return (
    <div className="bg-[#242424] md:-mt-2 w-full max-w-7xl mx-auto flex flex-col md:flex-row shadow-2xl overflow-hidden font-sans">
      {/* Left Sidebar: Profile and Red Diagonal */}
      <div className="relative flex items-center justify-center p-4 md:p-0 md:w-1/4 lg:w-1/5 bg-[#242424]">
        {/* Red Diagonal Shape */}
        <div className="absolute inset-0 bg-red-600 transform -skew-x-12 origin-top-left -ml-16 md:-ml-24"></div>

        {/* Profile Image Container */}
        <div className="relative z-10 p-4">
          <img
            src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/09-150x150.jpg"
            alt="Profile Host"
            className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Right Content: Events Grid */}
      <div className="md:w-3/4 lg:w-4/5 flex flex-col md:flex-row text-white divide-y md:divide-y-0 md:divide-x divide-gray-700">
        {events.map((event, index) => (
          <EventItem
            key={index}
            date={event.date}
            name={event.name}
            time={event.time}
            organizer={event.organizer}
          />
        ))}
      </div>
    </div>
  );
};

export default EventScheduleBanner;
