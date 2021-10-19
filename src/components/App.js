import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import * as actions from "../actions";
class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div className="ui container">
        {this.renderHeader()}
        <Route path="/post" exact component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state.auth);
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps, actions)(App);
