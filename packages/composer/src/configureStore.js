import { createStore, compose, applyMiddleware } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import firebase from "firebase";

import Rebase from "re-base";

import Raven from "raven-js";
import createRavenMiddleware from "raven-for-redux";

import rootReducer from "./reducers";

import stories from "./data/stories";
// import user from "./data/user";
// const stories = [];
const user = {};

// Store type
const STORE = "persist";

const defaultState = {
  stories,
  user
};

// Sentry.io
Raven.config("https://796f1032b1c74f15aba70d91dfcd14c5@sentry.io/360335", {
  release: process.env.VERSION
}).install();

// FIREBASE
export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzBGoszKOt1C_T4GV84hUBpjkK08H57KY",
  authDomain: "interviewjs-6c14d.firebaseapp.com",
  databaseURL: "https://interviewjs-6c14d.firebaseio.com",
  projectId: "interviewjs-6c14d",
  storageBucket: "interviewjs-6c14d.appspot.com",
  messagingSenderId: "126484254752"
});


// RE-BASE
export const base = Rebase.createClass(firebaseApp.database());

// PERSIST
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["routing"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancers = compose(
  // window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  applyMiddleware(
    createRavenMiddleware(Raven, {
    }),
    thunkMiddleware
  )
);

let store;
switch (STORE) {
  case "persist":
    store = createStore(
      persistedReducer,
      defaultState,
      enhancers
    );
    break;
  default:
    // transient
    store = createStore(
      rootReducer,
      defaultState,
      enhancers
    );
}

export const history = syncHistoryWithStore(browserHistory, store);
export const configureStore = () => {
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./reducers", () => {
        store.replaceReducer(
          rootReducer,
          defaultState,
          applyMiddleware(thunkMiddleware)
        );
      });
    }
  }
  return store;
};

export const persistor = persistStore(configureStore());
