import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import stories from "./stories";

const rootReducer = combineReducers({
  stories,
  routing: routerReducer
});

export default rootReducer;
