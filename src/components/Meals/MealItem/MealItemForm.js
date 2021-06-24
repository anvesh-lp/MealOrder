import React, {useRef, useState} from 'react';
import classes from "../styles/MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const [isAmountValid, setIsamountValid] = useState(true);

    const inputReference = useRef();

    const getAmountHandler = (event) => {
        event.preventDefault();
        const amount = inputReference.current.value;
        const enteredAmount = +amount;
        if (amount.trim().length === 0 || enteredAmount <= 0 || enteredAmount > 5) {
            setIsamountValid(false);
            setTimeout(() => {
                setIsamountValid(true)
            }, 900);
        } else {
            props.amountHandler(enteredAmount);
        }
    }


    return (
        <form className={classes.form} onSubmit={getAmountHandler}>
            <Input label={"Quantity"}
                   ref={inputReference}
                   input={{
                       id: 'amount' + props.id,
                       type: 'number',
                       min: '1',
                       // max: '5',
                       step: '1',
                       defaultValue: '1'
                   }}/>
            <button>+Add</button>
            {!isAmountValid && <p className={classes.p}>Please enter a valid value (1-5)</p>}
        </form>

    );
}

export default MealItemForm;