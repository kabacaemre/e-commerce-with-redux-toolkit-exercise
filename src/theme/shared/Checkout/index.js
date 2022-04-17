import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '../../../components/Box';
import './Checkout.scss';

function Checkout() {
  const total = useSelector((state) => state.basket);
  return (
    <Box title="Checkout">
      <span className="price">
        Total Price: <strong>{total.totalPrice ? total.totalPrice : '0'} ₺</strong>
      </span>
      <Link to="/checkout" style={{ width: '100%', display: 'block' }}>
        <button type="button" className="checkoutBtn">
          Checkout
        </button>
      </Link>
    </Box>
  );
}

export default Checkout;
