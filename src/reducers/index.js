import setReceiver from "./setReceiver";
import setSearchResult from "./setSearchResult";
import setSocket from "./setSocket";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  setReceiver,
  setSearchResult,
  setSocket,
});

export default rootReducer;
