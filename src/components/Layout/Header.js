import React, {Fragment} from 'react';
import mealsImage from '../../Resources/meals.jpg';
import classes from "./styles/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1> A react App</h1>
                <HeaderCartButton onButtonClick={props.onCartButtonClick}>Cart</HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Meals Image"/>
            </div>
        </Fragment>
    );
}

export default Header;