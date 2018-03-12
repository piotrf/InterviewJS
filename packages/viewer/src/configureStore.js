import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import firebase from "firebase";

import rootReducer from "./reducers";
import story from "./data/story";

export const firebaseApp = firebase.initializeApp({
  // apiKey: "AIzaSyAzBGoszKOt1C_T4GV84hUBpjkK08H57KY",
  // authDomain: "interviewjs-6c14d.firebaseapp.com",
  // databaseURL: "https://interviewjs-6c14d.firebaseio.com",
  // projectId: "interviewjs-6c14d",
  // storageBucket: "interviewjs-6c14d.appspot.com",
  // messagingSenderId: "126484254752"
});

const defaultState = {
  story
};

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, defaultState, enhancers);
// const store = createStore(persistedReducer, defaultState, enhancers);

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

export const persistor = persistStore(configureStore());
