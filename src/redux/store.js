// import { combineReducers } from 'redux';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactReducer from './contact/contact-reduser.js';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: { contacts: contactReducer },
  middleware,
});

export default store;
