import { configureStore } from '@reduxjs/toolkit';
// Slices
import basketSlice from './reducers/basketSlice';

export default configureStore({
  reducer: {
    basket: basketSlice,
  },
});
