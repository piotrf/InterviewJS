import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { Route, Router, IndexRoute, Redirect } from "react-router";

import { configureStore, history } from "./configureStore";

import App from "./App";
import Chat from "./views/Chat";
import Intro from "./views/Intro";
import Context from "./views/Context";
import Listing from "./views/Listing";
import Outro from "./views/Outro";
import Details from "./views/Details";

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
        <Route path="/intro" component={App}>
          <IndexRoute component={Intro} />
          <Route path="/interviewees" component={Listing} />
          <Route path="/chat" component={Chat} />
          <Route path="/context" component={Context} />
          <Route path="/outro" component={Outro} />
          <Route path="/details" component={Details} />
        </Route>
        <Redirect from="*" to="Intro" />
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
