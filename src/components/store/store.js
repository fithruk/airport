import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { destinationReducer } from "./destinationReducer/destinationReducer";

const mainReducer = combineReducers({
  flights: destinationReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
