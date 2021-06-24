import React from 'react';
import classes from "./styles/Cart.module.css";
import Model from "../UI/Model";

function Cart(props) {
    const cartItems = <ul className={classes['cart-items']}>{[{
        id: 'c1',
        name: 'sushi',
        amount: 2,
        price: 12.00
    }].map(item => <li>{item.name}</li>)}</ul>;

    return (
        <Model>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.6</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>order</button>
            </div>
        </Model>
    );
}

export default Cart;
