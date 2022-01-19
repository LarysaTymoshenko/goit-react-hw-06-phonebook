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

export default { addContact, deleteContact, changeFilter };
