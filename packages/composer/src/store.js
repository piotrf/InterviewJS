import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
// import { createBrowserHistory } from "history";
import { browserHistory } from "react-router";

import rootReducer from "./reducers/index";

// import comments from "./data/comments";
import stories from "./data/stories";

const defaultState = {
  stories
  // comments
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
