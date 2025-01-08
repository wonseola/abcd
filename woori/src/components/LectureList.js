import React from 'react';
import './LectureList.css';

const LectureList = ({ lectures }) => {
  return (
    <div className="lecture-list">
      {lectures.map((lecture, index) => (
        <div key={index} className="lecture-card">
          <img src="https://via.placeholder.com/300x180" alt={lecture.title} />
          <div className="lecture-card-content">
            <h3 className="lecture-title">{lecture.title}</h3>
            <p className="lecture-description">{lecture.description}</p>
            <p className="lecture-location">{lecture.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LectureList;
