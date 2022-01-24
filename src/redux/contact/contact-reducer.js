// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contact-actions';
import { current } from 'immer';

const contacts = { items: [], filter: '' };

export const contactsReducer = createReducer(
  { contacts },
  {
    [actions.addContact]: (state, { payload }) => {
      const currentState = current(state);
      return {
        contacts: {
          ...currentState.contacts,
          items: [...currentState.contacts.items, payload],
        },
      };
    },
    [actions.deleteContact]: (state, { payload }) => {
      const currentState = current(state);
      return {
        contacts: {
          ...currentState.contacts,
          items: [
            ...currentState.contacts.items.filter(item => item.id !== payload),
          ],
        },
      };
    },
    [actions.setFilter]: (state, { payload }) => {
      const currentState = current(state);
      return {
        contacts: {
          ...currentState.contacts,
          filter: payload,
        },
      };
    },
  },
);
