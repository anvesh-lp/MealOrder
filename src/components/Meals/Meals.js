import React, {Fragment} from 'react';
import MealsSummery from "./MealsSummery";
import AvailableMeals from "./AvailableMeals";

function Meals(props) {
    return (
        <Fragment>
            <MealsSummery/>
            <AvailableMeals/>
        </Fragment>
    );
}

export default Meals;