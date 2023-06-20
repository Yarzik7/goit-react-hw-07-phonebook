const getContacts = state => state.contacts.contacts ?? [];
const getFilter = state => state.filter;

export {getContacts, getFilter}
