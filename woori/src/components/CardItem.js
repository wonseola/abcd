import React from 'react';
import './CardItem.css';

const CardItem = ({ image, title, description, link }) => {
  return (
    <div className="card-item">
      <div className="card-image">
        <img
          src={image || 'https://via.placeholder.com/300x200'}
          alt={title}
        />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className="card-link">
          더 보기 →
        </a>
      </div>
    </div>
  );
};

export default CardItem;
