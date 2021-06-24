import React, {useContext} from 'react';
import CartIcon from "../Cart/CartIcon";
import classes from "./styles/HeaderCartButton.module.css";
import cartContext from '../../StoresContexts/Cart-Context';

function HeaderCartButton(props) {
    const cartCtx = useContext(cartContext);

    const numberOfCardItems = cartCtx.items.reduce((currentAmount, item) => {
        return currentAmount + item.quantity;
    }, 0);

    return (
        <button onClick={props.onButtonClick} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfCardItems}</span>
        </button>
    );
}

export default HeaderCartButton;