import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contact-actions';
// {
//   contacts: {
//   items: [],
//   filter: ""
//   }
// };
const items = createReducer([], {
  [actions.addContact]: (state, action) => action.payload,
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
