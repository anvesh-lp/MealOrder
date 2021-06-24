import React from 'react';
import classes from "./styles/Input.module.css";

function Input(props) {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/*...props.input makes {text:'input'} object to text=input*/}
            <input id={props.input.id} {...props.input}/>
        </div>
    );
}

export default Input;