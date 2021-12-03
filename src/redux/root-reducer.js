import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';

// The Root Reducer is a reducer that combines the data from all the reducers (states) in our application. This allows us to create a single consolidated state object for our application.
// Essentailly we are making the state of out application more modular.

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});