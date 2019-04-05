import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/app";
import "../assets/stylesheets/application.scss";

import postsReducer from "./reducers/posts_reducer";

const reducers = combineReducers({
  posts: postsReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById("root")
);
