import React, {useContext} from 'react';
import classes from "../styles/MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../StoresContexts/Cart-Context";

function MealItem(props) {

    const cartContext = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;
    const amountEntered = (amount) => {
        console.log(amount);
        const item = {
            id: props.id,
            price: props.price,
            quantity: amount,
            name: props.title
        };
        cartContext.addItem(item);
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm amountHandler={amountEntered} id={props.id}/>
            </div>
        </li>
    );
}

export default MealItem;
