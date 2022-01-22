import { createSelector } from 'reselect';

// export const getContacts = state => state.contacts.items;
// export const getFilter = state => state.contacts.filter;

// export const filterContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     // const normalizeFilter = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.includes(filter));
//   },
// );
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const filterContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact => {
    return contact.name.includes(normalizedFilter);
  });
};
