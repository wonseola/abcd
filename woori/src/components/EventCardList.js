import React from 'react';
import EventCard from './EventCard';

const EventCardList = ({ events }) => {
  return (
    <div className="event-card-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventCardList;
