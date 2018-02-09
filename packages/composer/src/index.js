import { Provider } from "react-redux";
import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute } from "react-router";

import store, { history } from "./store";

import "./styles/styles";

import App from "./App";
import Composer from "./views/Composer";
import Listing from "./views/Listing";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Listing} />
        <Route path="/stories/:storyId" component={Composer} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
