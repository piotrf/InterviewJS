import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { Route, Router, IndexRoute, Redirect } from "react-router";

import { configureStore, history } from "./configureStore";

import App from "./App";
import Composer from "./views/Composer";
import Listing from "./views/Listing";

const store = configureStore();

require("./injectGlobalStyles.js");

const rootEl = document.getElementById("root");

class Routes extends React.Component {
  /*
    set `shouldComponentUpdate` to false to make hot loading work as discussed here:
    https://github.com/reactjs/react-router-redux/issues/179#issuecomment-281437927
  */
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <Router key="Root" history={history}>
        <Route path="composer" component={App}>
          <IndexRoute component={Listing} />
          <Route path="/stories/:storyId" component={Composer} />
        </Route>
        <Redirect from="*" to="composer" />
      </Router>
    );
  }
}

const router = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

render(router, rootEl);

if (module.hot) {
  module.hot.accept(App, () => {
    render(router, rootEl);
  });
}
