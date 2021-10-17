import React from "react";
import CommentBox from "./CommentBox";

import ShowComments from "./ShowComments";

const App = () => {
  return (
    <div className="ui container">
      <CommentBox />
      <ShowComments />
    </div>
  );
};
export default App;
