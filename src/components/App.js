import React from "react";
import CommentList from "./CommentList";

import ShowComments from "./CommentList";

const App = () => {
  return (
    <div className="ui container">
      <CommentList />
      <ShowComments />
    </div>
  );
};
export default App;
