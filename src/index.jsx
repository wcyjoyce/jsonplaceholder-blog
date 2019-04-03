import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import App from "./components/app";
import "../assets/stylesheets/application.scss";

const reducers = combineReducers({
  changeMe: (state = null, action) => state
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
