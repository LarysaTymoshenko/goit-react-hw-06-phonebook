import types from './contact-types';
import { nanoid } from 'nanoid';

const addContact = (name, number, id) => ({
  type: types.ADD,
  payload: {
    id: nanoid(),
    number,
    name,
  },
});

const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});
const changeFilter = value => ({
  type: types.FILTER,
  payload: value,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
