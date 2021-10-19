import { combineReducers } from "redux";
import CommentReduce from "./CommentReduce";
import auth from "./auth";
export default combineReducers({
  comments: CommentReduce,
  auth: auth,
});
