import { userActionTypes } from "./user-types";

// The user reducer is a funtion that receives two properties. A state object which represents the intitial or last state and an action.
// This allows us to tell our application to perform certain actions as state changes.

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    
    // Based on the action received, render a new state.
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };

        //  If none of the actions that we care about have been triggered, then do nothing.
        default:
            return state;
    }
};

export default userReducer;