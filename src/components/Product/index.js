/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BasketButton from '../BasketButton';
import './Product.scss';

function Product({ product }) {
  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <span className="price">{`${product.price} TL`}</span>
      <Link to={`/product/${product.id}`}>
        <strong className="title">{product.name}</strong>
      </Link>
      <BasketButton product={product} />
    </div>
  );
}

export default Product;

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
