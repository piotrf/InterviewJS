import { createStore, compose, applyMiddleware } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

import Raven from "raven-js";
import createRavenMiddleware from "raven-for-redux";

import rootReducer from "./reducers";
import story from "./data/story";

window.STORY = story; // FIXME

// Sentry.io
Raven.config("https://5ead2dcac648436b93094e8a371bf1b1@sentry.io/365850", {
  release: process.env.VERSION
}).install();


const defaultState = {
  story: window.top !== window ? {} : story
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  applyMiddleware(
    createRavenMiddleware(Raven, {})
  )
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);
export const configureStore = () => {
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./reducers", () => {
        store.replaceReducer(rootReducer, defaultState, enhancers);
      });
    }
  }
  return store;
};
