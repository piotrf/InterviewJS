import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import story from "./story";

const rootReducer = combineReducers({
  story,
  routing: routerReducer,
});

export default rootReducer;
