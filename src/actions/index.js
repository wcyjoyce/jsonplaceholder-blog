import lodash from "lodash";
import jsonplaceholder from "../api/jsonplaceholder.jsx";

// export function fetchPosts() {
//   return async (dispatch) => {
//     const response = await jsonplaceholder.get("/posts/");
//     dispatch({ type: "FETCH_POSTS", payload: response });
//   };
// };

// Refactoring:
export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get("/posts/");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// #1: Original "fetchUser" action:
// export const fetchUser = (id) => async dispatch => {
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

// #2: Memoising "fetchUser" action:
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
