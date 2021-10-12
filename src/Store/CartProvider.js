import CartContext from './CartContext'
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    amount: 0
}

const cartReducer = (state, action) => {

    if (action.type === 'add') {

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {

            updatedItems = state.items.concat(action.item)
        }
    
    return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
    }
};

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
