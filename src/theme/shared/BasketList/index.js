/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQty, incrementQty } from '../../../store/reducers/basketSlice';
import Box from '../../../components/Box';
import { Minus, Plus } from '../../../components/Icons';
import './BasketList.scss';

function BasketList() {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket);
  useEffect(() => {
    console.log('basketItems', basketItems?.cartItems);
  }, []);
  return (
    <Box title="Checkout">
      {basketItems?.cartItems?.length > 0 ? (
        <ul className="basketList">
          {basketItems.cartItems.map((product) => {
            return (
              <li key={product.id}>
                <div className="leftBox">
                  <h6 className="title" title={product.name}>
                    {product.name}
                  </h6>
                  <span className="price">{product.price} ₺</span>
                </div>
                <div className="rightBox">
                  <button
                    type="button"
                    className="minus"
                    disabled={product.qty === 1 ? 'disabled' : ''}
                    onClick={() => dispatch(decrementQty(product))}
                  >
                    <Minus />
                  </button>
                  <span>{product.qty}</span>
                  <button type="button" className="plus" onClick={() => dispatch(incrementQty(product))}>
                    <Plus />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <span className="basketEmptyText">Basket is empty</span>
      )}
    </Box>
  );
}

export default BasketList;
