import React from 'react';
import classes from "./styles/Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/*...props.input makes {text:'input'} object to text=input*/}
            <input ref={ref} id={props.input.id} {...props.input}/>
        </div>
    );
})

export default Input;