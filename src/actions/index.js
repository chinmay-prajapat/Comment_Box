export const comments = (comment) => {
  return {
    type: "SAVE_COMMENT",
    payload: comment,
  };
};
