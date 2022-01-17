import { combineReducers } from "redux";

// {
//   contacts: {
//   items: [],
//   filter: ""
//   }
// };
const items = (state = [], { type, payload }) => {
  switch (type) {
    case type.ADD:
      return [...state, payload];
    case type.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = "", action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
