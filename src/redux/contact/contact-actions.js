import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');

const deleteContact = createAction('contacts/delete');
const setFilter = createAction('contacts/filter');
export default { addContact, deleteContact, setFilter };
