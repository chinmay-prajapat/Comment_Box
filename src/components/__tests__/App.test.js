import React from "react";
import { shallow } from "enzyme";
import CommentBox from "../CommentBox";
import App from "../App";
import CommentList from "../CommentList";
let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />); //Before any task run this function will run
});
it("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
it("show a comment list", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentList).length).toEqual(1);
});
