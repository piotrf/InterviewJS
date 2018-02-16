import React from "react";
import ReactModal from "react-modal";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { Route, Router, IndexRoute, Redirect } from "react-router";

import App from "./App";
import Composer from "./views/Composer";
import Listing from "./views/Listing";

import store, { history } from "./store";

require("./globalStyles.js");

ReactModal.defaultStyles = {};

/* eslint no-unused-expressions: 0 */

// Build the middleware for intercepting and dispatching navigation actions

const rootEl = document.getElementById("root");

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="composer" component={App}>
        <IndexRoute component={Listing} />
        <Route path="/stories/:storyId" component={Composer} />
      </Route>
      <Redirect from="*" to="composer" />
    </Router>
  </Provider>
);

render(router, rootEl);
