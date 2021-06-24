import React from 'react';
import classes from "../styles/MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {

    const price = `$${props.price.toFixed(2)}`;


    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id}/>
            </div>
        </li>
    );
}

export default MealItem;
