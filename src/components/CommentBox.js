import React, { Component } from "react";
import { connect } from "react-redux";
import { comments } from "../actions";
import { fetchComments } from "../actions";
class CommentBox extends Component {
  state = { comment: "" };
  componentDidMount() {}
  componentDidUpdate() {}
  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.comments(this.state.comment);
    this.setState({ comment: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps, { comments, fetchComments })(
  CommentBox
);
