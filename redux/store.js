// store.js

import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

const middleware = [thunk];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, composedEnhancers);

export default store;
