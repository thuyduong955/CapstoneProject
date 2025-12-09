import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';
import inventoryReducer from './inventorySlice';
import uiReducer from './uiSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    inventory: inventoryReducer,
    ui: uiReducer,
  },
});

export default store;
