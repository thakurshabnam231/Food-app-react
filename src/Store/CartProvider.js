import CartContext from './CartContext'
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    amount: 0
}

const cartReducer = (state, action) => {

    if (action.type === 'add') {

        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'add', item: item })
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'remove', id: id })
    };

    const cartcontext = {
        items: cartState.items,
        amount: cartState.amount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartcontext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
