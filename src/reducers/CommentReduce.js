export default (state = [], action) => {
  if (action.type === "COMMENT") {
    return [...state, action.payload];
  }
  return state;
};
