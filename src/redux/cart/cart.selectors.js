import { createSelector } from 'reselect'

const selectCart = state => state.cart;

//const selecUser = state => state.user
export const selectCartItems = createSelector(
    // [selectCart, selectUser],
    [selectCart],
    // (cart, user ) =>
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems ],
    cartItems => 
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity,
        0
    )
)