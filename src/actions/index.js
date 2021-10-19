import axios from "axios";
export const comments = (comment) => {
  return {
    type: "SAVE_COMMENT",
    payload: comment,
  };
};
export function fetchComments() {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: "FETCH_COMMENTS",
    payload: response,
  };
}
export function changeAuth(isLoggedIn) {
  return {
    type: "CHANGE_AUTH",
    payload: isLoggedIn,
  };
}
