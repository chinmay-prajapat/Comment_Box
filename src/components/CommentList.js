import React from "react";
import { connect } from "react-redux";
const CommentList = ({ comments }) => {
  console.log(comments);

  return (
    <div>
      <h4 className="header">Comment List</h4>
      home
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    comments: state.comments,
  };
};
export default connect(mapStateToProps)(CommentList);
