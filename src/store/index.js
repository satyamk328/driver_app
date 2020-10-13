import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // this is for debugging with React-Native-Debugger, you may leave it out
import reducer from "./../reducers/";

export const store = createStore(
    reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);


