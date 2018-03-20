import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import { browserHistory } from "react-router";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import firebase from "firebase";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";

import Rebase from "re-base";

import rootReducer from "./reducers";
import storiesReducer from "./reducers/stories";
import userReducer from "./reducers/user";

import stories from "./data/stories";
// import user from "./data/user";
// const stories = [];
const user = {};

// Store type
const STORE = 'persist';

const defaultState = {
  stories,
  user
};

// FIREBASE

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzBGoszKOt1C_T4GV84hUBpjkK08H57KY",
  authDomain: "interviewjs-6c14d.firebaseapp.com",
  databaseURL: "https://interviewjs-6c14d.firebaseio.com",
  projectId: "interviewjs-6c14d",
  storageBucket: "interviewjs-6c14d.appspot.com",
  messagingSenderId: "126484254752"
});

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// initialize firestore
// firebase.firestore() // <- needed if using firestore

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  // reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const fireReducer = combineReducers({
  firebase: firebaseReducer,
  stories: storiesReducer,
  user: userReducer,
  routing: routerReducer,
  // firestore: firestoreReducer // <- needed if using firestore
})

// RE-BASE
export const base = Rebase.createClass(firebaseApp.database());

// PERSIST

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['routing'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  applyMiddleware(thunkMiddleware)
);

let store;
switch(STORE) {
  case 'firebase':
    store = createStoreWithFirebase(fireReducer, defaultState, enhancers)
    break;
  // case 'rebase':
  //   // TODO
  //   break;
  case 'persist':
    store = createStore(persistedReducer, defaultState, enhancers);
    break;
  default: // transient
    store = createStore(rootReducer, defaultState, enhancers);
}

// Store listener?
// const handleChange = () => {
//   console.log(store.getState())
// }
//
// let unsubscribe = store.subscribe(handleChange);
// // unsubscribe();

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
