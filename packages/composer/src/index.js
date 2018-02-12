import React from "react";
import ReactModal from "react-modal";
import { injectGlobal } from "styled-components";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { Router, Route, IndexRoute, Redirect } from "react-router";

import { color, reset } from "interviewjs-styleguide";

import App from "./App";
import Composer from "./views/Composer";
import Listing from "./views/Listing";

import store, { history } from "./store";

ReactModal.defaultStyles = {};

/* eslint no-unused-expressions: 0 */
injectGlobal`
  ${reset};
  html {
    height: 100%;
    width: 100%;
  }
  body {
    background: ${color.greyWt};
    height: 100%;
  }
  #root {
    height: 100%;
  }
  ::selection { background: ${color.blueWt}; }
  ::-moz-selection { background: ${color.blueWt}; }
`;

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

render(router, document.getElementById("root"));