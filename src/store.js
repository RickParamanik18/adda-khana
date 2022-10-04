import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__()
);

export default store;
