// Here we are writing a selector, which is a piece of code that receives a state object and pulls off a portion, in this case the cart item quantity.
import { createSelector } from "reselect";

// An input selector which retrieves a piece of a state object, in this case the cart portion of the app state.
const selectCart = state => state.cart;

// Memoized selector takes in an array of input selectors, and then a function which returns the values we want from the selectors.
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

// Another memoized selector which calls the selectCartItems selector to retrieve the cart items, then uses reduce which takes the quantity from each cart item and creates a new
// accumulatedQuantity state object which we use to keep track of our total number of cart items.
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
    )
)