import React from 'react';
import './LectureList.css';
import { Link } from 'react-router-dom';

const LectureList = ({ lectures }) => {
  return (
    <div className="lecture-list">
      {lectures.map((lecture, index) => (
         <Link key={lecture.id} to={`/event/${lecture.id}`} className="lecture-card-link">
        <div key={index} className="lecture-card">
          <img src="https://via.placeholder.com/300x180" alt={lecture.title} />
          <div className="lecture-card-content">
            <h3 className="lecture-title">{lecture.title}</h3>
            <p className="lecture-description">{lecture.description}</p>
            <p className="lecture-location">지역: {lecture.location}</p>
            <p className="lecture-date">일시: {lecture.date}</p>
            <p className="lecture-period">
              모집기간: {lecture.startDate} ~ {lecture.endDate}
            </p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default LectureList;
