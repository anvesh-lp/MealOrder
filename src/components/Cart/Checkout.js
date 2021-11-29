import classes from "./styles/Checkout.module.css";
import {useRef, useState} from "react";

const isEmpty = (value) => {
    return value.trim().length === 0;
}
const isFiveChars = value => value.trim().length < 5;

const Checkout = (props) => {

    const [isForminputsValid, setFormInputsvalidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    });

    const inputRef = useRef();
    const streetRef = useRef();
    const cityRef = useRef();
    const postalCodeRef = useRef();


    const handleFormSubmission = (event) => {
        event.preventDefault();
        const enterValue = inputRef.current.value;
        const streetValue = streetRef.current.value;
        const cityvalue = cityRef.current.value;
        const postalCode = postalCodeRef.current.value;


        const isnameValid = isEmpty(enterValue);
        const isStreetValid = isEmpty(streetValue);
        const isCityValid = isEmpty(cityvalue);
        const isPostalCodeValid = isFiveChars(postalCode);

        setFormInputsvalidity({
            name: !isnameValid,
            street: !isStreetValid,
            postalCode: !isPostalCodeValid,
            city: !isCityValid
        });

        const isFormValid = isnameValid && isStreetValid && isCityValid && isPostalCodeValid;
        if (!isFormValid) {
            return;
        }
    }
    const cssClassName = (value) => {
        if (value === "name") return `${classes.control} ${isForminputsValid.name ? '' : classes.invalid}`
        else if (value === "street") return `${classes.control} ${isForminputsValid.street ? '' : classes.invalid}`
        else if (value === "code") return `${classes.control} ${isForminputsValid.postalCode ? '' : classes.invalid}`
        else if (value === "city") return `${classes.control} ${isForminputsValid.city ? '' : classes.invalid}`
    }


    return (
        <form onSubmit={handleFormSubmission} className={classes.form}>
            <div className={cssClassName("name")}>
                <label htmlFor="name">Your Name</label>
                <input ref={inputRef} type="text" id="name"/>
                {!isForminputsValid.name && <p> please Enter a valid Value</p>}
            </div>
            <div className={cssClassName("street")}>
                <label htmlFor="street">street</label>
                <input ref={streetRef} type="text" id="street"/>
                {!isForminputsValid.street && <p> please Enter a valid Value</p>}

            </div>
            <div className={cssClassName("code")}>
                <label htmlFor="code">postal Code</label>
                <input ref={postalCodeRef} type="text" id="code"/>
                {!isForminputsValid.postalCode && <p> please Enter a valid Value</p>}

            </div>
            <div className={cssClassName("city")}>
                <label htmlFor="city">City</label>
                <input ref={cityRef} type="text" id="city"/>
                {!isForminputsValid.city && <p> please Enter a valid Value</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onclose}>Cancel</button>
                <button className={classes.submit}>Conform</button>
            </div>
        </form>
    )
}
export default Checkout;