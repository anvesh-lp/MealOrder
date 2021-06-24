import React, {useReducer} from 'react';
import CartContext from "./Cart-Context";


const PROPERTIES = {
    ADD: 'add',
    DELETE: 'delete'
};

const reducerFunction = (state, action) => {
    if (action.type === PROPERTIES.ADD) {
        const updatedItems = state.items.concat(action.item);
        const totalAmount = state.totalAmount + action.item.price * action.item.quantity;
        return {
            items: updatedItems,
            totalAmount: totalAmount
        }
    }
};

const DEFAULT_STATE = {
    items: [],
    totalAmount: 0
};

function CartContextProvider(props) {

    const [state, dispatcher] = useReducer(reducerFunction, DEFAULT_STATE);

    const AddItemToCart = (item) => {
        dispatcher({type: PROPERTIES.ADD, item: item});
    }
    const DeleteItemFromCart = (id) => {

    }
    const cartContext = {
        items: state.items,
        // items:[{id:1,price:200,quantity:2}],
        totalAmount: state.totalAmount,
        addItem: AddItemToCart,
        deleteItem: DeleteItemFromCart
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;