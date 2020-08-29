export const addItemToCart = (cartItems , cartItemToAdd) => {
    const existingCartItem = cartItem.find(cartItem => cartItem.id === cartItemToAdd.id )
}

if(existingCartItem) {
    return cartItem.map(cartItem => 
        cartItem.id === cartItemToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1} :
        cartItem 
        )
}
return [...cartItems, {...cartItemToAdd, quantity: 1}]