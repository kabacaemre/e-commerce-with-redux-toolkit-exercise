import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import BasketList from '../../shared/BasketList';
import Checkout from '../../shared/Checkout';
import Box from '../../../components/Box';
import BasketButton from '../../../components/BasketButton';
import './ProductDetail.scss';

function ProductDetail() {
  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem('products'));
  const result = data.filter((x) => x.id === id);
  if (result.length < 1) {
    return <Redirect to="/404" />;
  }
  const product = result[0];
  return (
    <div className="wrapper">
      <div className="row">
        <div className="content">
          <Box>
            <div className="row">
              <div className="productImg">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="productDetail">
                <h3 className="title">{product.name}</h3>
                <span className="price">{`${product.price} TL`}</span>
                <BasketButton product={product} />
                <p className="desc">{product.description}</p>
              </div>
            </div>
          </Box>
        </div>
        <div className="sidebar">
          <BasketList />
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
