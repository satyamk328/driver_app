import { createStore, applyMiddleware } from "redux";
import reducer from "./../reducers/";
import thunk from "redux-thunk";

//const middlewares = [logger, thunk]; //for Debugging
const middlewares = [thunk];
const store = createStore(reducer, applyMiddleware(...middlewares));
export default store;
