import React, {useReducer} from 'react';
import CartContext from "./Cart-Context";


const PROPERTIES = {
    ADD: 'add',
    DELETE: 'delete'
};

const reducerFunction = (state, action) => {
    if (action.type === PROPERTIES.ADD) {
        let updatedItems;
        const totalAmount = state.totalAmount + action.item.price * action.item.quantity;
        //Check if the upcoming item is already present
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        console.log(existingItemIndex);
        if (existingItemIndex === -1) {
            //    NO item found(it is a new item
            updatedItems = state.items.concat(action.item);
        } else {
            //    Item is laready present in the list
            let existingItem = state.items[existingItemIndex];
            let updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + action.item.quantity
            };
            updatedItems = [...state.items];

            updatedItems[existingItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: totalAmount
        }
    } else if (action.type === PROPERTIES.DELETE) {
        // console.log(action.id);
        let selectedItemIndex = state.items.findIndex(item => item.id === action.id);
        let selectedItem = state.items[selectedItemIndex];
        // console.log(selectedItem);
        let totalAmount = state.totalAmount - selectedItem.price;
        let updatedItems;
        if (selectedItem.quantity === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            let updatedItem = {...selectedItem, quantity: selectedItem.quantity - 1};
            updatedItems = [...state.items];
            updatedItems[selectedItemIndex] = updatedItem;
        }
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
        dispatcher({type: PROPERTIES.DELETE, id: id});

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