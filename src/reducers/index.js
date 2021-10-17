import { combineReducers } from "redux";
import CommentReduce from "./CommentReduce";
export default combineReducers({
  comments: CommentReduce,
});
