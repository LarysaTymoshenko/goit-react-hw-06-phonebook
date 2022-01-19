import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('contact/add', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      number,
      name,
    },
  };
});

const deleteContact = createAction('contact/delete');
const changeFilter = createAction('contact/filter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
