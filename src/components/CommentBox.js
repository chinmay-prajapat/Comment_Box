import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { comments } from "../actions";
const CommentBox = () => {
  const [comment, setComment] = useState("");

  return <div className="ui segment">Comment Box</div>;
};
export default CommentBox;
