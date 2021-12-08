import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';

// The Root Reducer is a reducer that combines the data from all the reducers (states) in our application. This allows us to create a single consolidated state object for our application.
// Essentailly we are making the state of out application more modular.

// A configuration object used by redux-persist that tells the application which part of the store to persist. In this case the cart.
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
        user: userReducer,
        cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);