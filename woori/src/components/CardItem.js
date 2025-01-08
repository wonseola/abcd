import React from 'react';
import './CardItem.css';

const CardItem = ({ imageText, title, description, link }) => {
    return (
        <div className="grid-item">
            <div className="grid-image">{imageText}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}>더 알아보기 →</a>
        </div>
    );
};

export default CardItem;
