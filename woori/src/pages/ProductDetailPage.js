import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₩{product.price.toLocaleString()}</p>
      <button>장바구니에 추가</button>
    </div>
  );
};

export default ProductCard;
