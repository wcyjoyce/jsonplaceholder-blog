import lodash from "lodash";
import jsonplaceholder from "../api/jsonplaceholder.jsx";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // TODO:
  // 1) Get list of posts by calling fetchPosts()
  // 2) Find all unique userId's from the list of posts
  // 3) Iterate over unique userId's
  // 4) Call fetchUser() with each unique userId

  // await dispatch(fetchPosts()); // invokes fetchPosts() function and returns payload; "await" ensures that jsonplaceholder.get() is executed before returning payload
  // const fetchedPosts = getState().posts; // returns list of posts fetched
  // const userIds = _.uniq(_.map(fetchedPosts, "userId")) // finds unique userId's of fetchedPosts
  // userIds.forEach(id => dispatch(fetchUser(id)));

  // Refactoring with chaining function in Lodash
  await dispatch(fetchPosts());
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value(); // executes chain function
};

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
export const fetchUser = (id) => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// #2: Memoising "fetchUser" action:
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
