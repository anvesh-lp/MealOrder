import React, {useContext, useEffect, useState} from 'react';
import CartIcon from "../Cart/CartIcon";
import classes from "./styles/HeaderCartButton.module.css";
import cartContext from '../../StoresContexts/Cart-Context';

function HeaderCartButton(props) {
    const cartCtx = useContext(cartContext);
    const [btnHighlighetd, serBtnHughlighted] = useState(false);


    const numberOfCardItems = cartCtx.items.reduce((currentAmount, item) => {
        return currentAmount + item.quantity;
    }, 0);

    const items = cartCtx.items;

    const buttonClasses = `${classes.button} ${btnHighlighetd ? classes.bump : ''}`;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        serBtnHughlighted(true);
        const timer = setTimeout(() => {
            serBtnHughlighted(false)
        }, 300);
        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button onClick={props.onButtonClick} className={buttonClasses}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfCardItems}</span>
        </button>
    );
}

export default HeaderCartButton;