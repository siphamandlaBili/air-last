import React from 'react';
import './HotelCard.css';

const HotelCard = ({ image, title, details, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-details">{details}</p>
        <div className="card-price">{price} /night</div>
      </div>
      <div className="button-group">
        <button className="button update">Update</button>
        <button className="button delete">Delete</button>
      </div>
    </div>
  );
};

export default HotelCard;
