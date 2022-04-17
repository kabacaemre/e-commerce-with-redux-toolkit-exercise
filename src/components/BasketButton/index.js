/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { basketToggle } from '../../store/reducers/basketSlice';
import './BasketButton.scss';

function BasketButton({ product }) {
  const dispatch = useDispatch();

  const basketItems = useSelector((state) => state.basket);

  const [inTheBasket, setInTheBasket] = useState(false);

  const basketToggleBtn = () => {
    dispatch(basketToggle({ id: product.id, name: product.name, price: product.price, qty: 1 }));
  };

  useEffect(() => {
    const basketControl = basketItems.cartItems.filter((x) => x.id === product.id);
    if (basketControl.length > 0) {
      setInTheBasket(false);
    } else {
      setInTheBasket(true);
    }
  }, [basketItems.cartItems, inTheBasket, product.id]);

  return (
    <button type="button" className="addBasket" onClick={basketToggleBtn}>
      {inTheBasket === true ? 'Add to Cart' : 'Remove from Cart'}
    </button>
  );
}

BasketButton.propTypes = {
  product: PropTypes.object.isRequired,
};

export default BasketButton;
