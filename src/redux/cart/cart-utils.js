export const addItemToCart = (cartItems, cartItemsToAdd) => {

    // Check the existing cartItems to see if the new item we are adding already exists
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsToAdd.id
    );

    // If the item already exists, we then create a new array with map to ensure our state updates. Then find the matching cartItem id, create a new cartItem and increment the quantity.
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemsToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
            )
    }

    // Returns a new array with all existing items, with an added object of our cartItem with a default quantity of 1.
    return [...cartItems, { ...cartItemsToAdd, quantity: 1 }]
}