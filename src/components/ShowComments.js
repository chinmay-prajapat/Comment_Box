import React from "react";
import { connect } from "react-redux";
const ShowComments = ({ comments }) => {
  console.log(comments);
  return <div>home</div>;
};
const mapStateToProps = (state) => {
  console.log(state.comments);
  return {
    comments: state.comments,
  };
};
export default connect(mapStateToProps)(ShowComments);
