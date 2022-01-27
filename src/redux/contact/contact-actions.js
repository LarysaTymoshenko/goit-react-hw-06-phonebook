import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const addContact = createAction('contacts/add', payload => ({
  payload: { id: nanoid(), ...payload },
}));

const deleteContact = createAction('contacts/delete');
const setFilter = createAction('contacts/filter');
export default { addContact, deleteContact, setFilter };
