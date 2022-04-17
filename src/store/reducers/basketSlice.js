/* eslint-disable no-param-reassign */

// https://github.com/reduxjs/redux-toolkit/issues/360

import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

const basketInitialState = {
  items: null,
  totalPrice: 0,
};

const cartItemsFromStorage = JSON.parse(localStorage.getItem('basket'));

if (cartItemsFromStorage === null || cartItemsFromStorage === undefined) {
  localStorage.setItem('basket', JSON.stringify(basketInitialState));
}

export const basket = createSlice({
  name: 'basket',
  initialState: {
    cartItems: cartItemsFromStorage?.items !== null ? cartItemsFromStorage?.items : [],
    totalPrice: parseFloat(cartItemsFromStorage?.totalPrice),
  },
  reducers: {
    basketToggle: (state, action) => {
      const item = action.payload;
      const itemPrice = parseFloat(action.payload.price);
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        for (let i = 0; i < state.cartItems.length; i++) {
          const selectedModel = state.cartItems[i];

          if (selectedModel.id === action.payload.id) {
            state.cartItems.splice(i, 1);
            break;
          }
        }
        const existItemTotalPrice = itemPrice * action.payload.qty;
        state.totalPrice -= existItemTotalPrice;
        localStorage.setItem(
          'basket',
          JSON.stringify({ items: state.cartItems, totalPrice: state.totalPrice.toFixed(2) }),
        );
        toast.success('Ürün sepetinizden çıkarılmıştır.');
      } else {
        state.cartItems = [...state.cartItems, item];
        state.totalPrice += itemPrice;
        localStorage.setItem(
          'basket',
          JSON.stringify({ items: state.cartItems, totalPrice: state.totalPrice.toFixed(2) }),
        );
        toast.success('Ürün sepetinize eklenmiştir.');
      }
    },
    incrementQty: (state, action) => {
      for (let i = 0; i < state.cartItems.length; i++) {
        const selectedIncModel = state.cartItems[i];

        if (selectedIncModel.id === action.payload.id) {
          selectedIncModel.qty += 1;
          break;
        }
      }
      const itemPrice = parseFloat(action.payload.price);
      state.totalPrice += itemPrice;
      localStorage.setItem(
        'basket',
        JSON.stringify({ items: state.cartItems, totalPrice: state.totalPrice.toFixed(2) }),
      );
      toast.success('Ürün adedi arttırılmıştır.');
    },
    decrementQty: (state, action) => {
      for (let i = 0; i < state.cartItems.length; i++) {
        const selectedIncModel = state.cartItems[i];

        if (selectedIncModel.id === action.payload.id) {
          selectedIncModel.qty -= 1;
          break;
        }
      }
      const itemPrice = parseFloat(action.payload.price);
      state.totalPrice -= itemPrice;
      localStorage.setItem(
        'basket',
        JSON.stringify({ items: state.cartItems, totalPrice: state.totalPrice.toFixed(2) }),
      );
      toast.success('Ürün adedi azaltılmıştır.');
    },
  },
});

export const { basketToggle, incrementQty, decrementQty } = basket.actions;

export default basket.reducer;
