import { createSelector } from "reselect";
import memoize from "lodash.memoize";

// An object used to match a string value (url parameters) to the correct integer id.
const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const shopSelector = state => state.shop;

export const selectCollections = createSelector(
    [shopSelector],
    shop => shop.collections
);

// Finds the collection.id which matches the url parameter of the collection id map. ie) shop/hats matches to hats: 1
// By wrapping the function in a memoize we state that when this function receives collectionUrlParam we want to memoize the return of the function (a selector), 
// if the function gets called with the same collectionUrlParam as last time, don't rerun the function but instead return the previous stored selector.
export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )
);