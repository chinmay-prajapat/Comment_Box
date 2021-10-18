import React from "react";

import { createStore } from "redux";
import reducers from "reducers";
import { Provider } from "react-redux";
export default (props) => {
  return <Provider store={createStore(reducers)}>{props.children}</Provider>;
};
