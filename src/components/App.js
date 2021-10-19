import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

class App extends Component {
  renderButton() {}
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>{this.renderButton}</li>
      </ul>
    );
  }
  render() {
    return (
      <div className="ui container">
        <Route path="/post" exact component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}
export default App;
