import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

// Spreading the middlewear to our createStore function allows us to more easily manipulate the store in the future by simply modifying the middlewares.
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// A persistant version of our store that allows the application store to persist when the application refreshes.
export const persistor = persistStore(store);

export default store;