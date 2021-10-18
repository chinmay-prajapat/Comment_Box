import { comments } from "actions";
describe("comments", () => {
  it("has the correct type", () => {
    const action = comments();
    expect(action.type).toEqual("SAVE_COMMENT");
  });
  it("has the correct payload", () => {
    const action = comments("New Comment");
    expect(action.payload).toEqual("New Comment");
  });
});
