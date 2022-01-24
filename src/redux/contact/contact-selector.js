export const getContacts = state => {
  return state.contacts.items;
};

export const getFilter = state => state.contacts.filter;

export const filterContacts = state => {
  return getContacts(state).filter(el =>
    el?.name.toLowerCase().includes(getFilter(state).toLowerCase()),
  );
};
