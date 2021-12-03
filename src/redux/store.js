import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

// Spreading the middlewear to our createStore function allows us to more easily manipulate the store in the future by simply modifying the middlewares.
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;