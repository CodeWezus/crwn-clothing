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
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    // If the quantity of the item to remove is 1, we want to return a new cartItems object with all the items excluding the removed one.
    if (existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    // If the quantity of the item to remove is >1, find that item and decrease it' quantity by 1.
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id ? 
        { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
}