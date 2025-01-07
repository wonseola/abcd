import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card h-100 shadow-sm" style={{ minWidth: '200px', maxWidth: '220px' }}>
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{ height: '150px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">등록일: {product.date}</p>
      </div>
    </div>
  );
};

export default ProductCard;
