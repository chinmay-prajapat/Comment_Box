import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";
beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
  });
});
afterEach(() => {
  moxios.uninstall();
});
it("can fetch a list of comments and display them", (done) => {
  const Wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  Wrapped.find(".fetch-comments").simulate("click");
  moxios.wait(() => {
    Wrapped.update();
    expect(Wrapped.find("li").length).toEqual(2);
    done();
    Wrapped.unmount();
  }, 100);
});
