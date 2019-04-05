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

export const fetchUser = (id) => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
}
