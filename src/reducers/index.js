import setReceiver from "./setReceiver";
import setSearchResult from "./setSearchResult";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  setReceiver,
  setSearchResult,
});

export default rootReducer;
