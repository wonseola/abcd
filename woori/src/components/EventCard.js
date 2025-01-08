import React from 'react';
import './EventCard.css'; // 스타일링 파일

const EventCard = ({ title, date, location, description }) => {
  return (
    <div className="event-card">
      <div className="event-card-header">
        <h3 className="event-title">{title}</h3>
        <span className="event-date">{date}</span>
      </div>
      <p className="event-description">{description}</p>
      <span className="event-location">{location}</span>
    </div>
  );
};

export default EventCard;
