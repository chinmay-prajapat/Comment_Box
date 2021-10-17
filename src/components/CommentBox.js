import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { comments } from "../actions";
const CommentBox = () => {
  const [comment, setComment] = useState("");

  return (
    <div className="ui segment">
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          comments(comment);
        }}
      >
        <div className="field">
          <label>Text</label>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};
export default CommentBox;
