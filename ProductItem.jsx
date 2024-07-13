import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductItem;
