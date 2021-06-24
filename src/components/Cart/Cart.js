import React, {useContext} from 'react';
import classes from "./styles/Cart.module.css";
import Model from "../UI/Model";
import CartContext from "../../StoresContexts/Cart-Context";
import CartItem from "./CartItem";

function Cart(props) {
    // const [cartIsEmpty,setCartIsEmpty]=useState(true);
    const cartContext = useContext(CartContext);

    const cartIsEmpty = cartContext.items.length > 0;
    const deleteItemHandler = (id) => {
        cartContext.deleteItem(id);
    };

    const addItemHandler = (item) => {
        cartContext.addItem({...item, quantity: 1});
    };

    const cartItems = <ul className={classes['cart-items']}>{
        cartContext.items.map(item => <CartItem
            key={item.id}
            price={item.price}
            name={item.name}
            quantity={item.quantity}
            onRemove={deleteItemHandler.bind(null, item.id)}
            onAdd={addItemHandler.bind(null, item)}
        />)
    }</ul>;

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;


    return (
        <Model onclose={props.onCloseButtonClick}>
            {cartItems}

            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onCloseButtonClick} className={classes['button--alt']}>Close</button>
                {cartIsEmpty && <button className={classes.button}>order</button>}
            </div>
        </Model>
    );
}


export default Cart;
