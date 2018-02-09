import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import stories from "./stories";

const rootReducer = combineReducers({
  stories,
  // comments,
  routing: routerReducer
});

export default rootReducer;
