import CommentReduce from "reducers/CommentReduce";
it("handle action of type SAVE_COMMENT", () => {
  const action = {
    type: "SAVE_COMMENT",
    payload: "New Comment",
  };
  const newState = CommentReduce([], action);
  expect(newState).toEqual(["New Comment"]);
});
it("handles action with unkown type", () => {
  const newState = CommentReduce([], {});
  expect(newState).toEqual([]);
});
