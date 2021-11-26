import React, {useEffect, useState} from 'react';
import classes from "./styles/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals(props) {
    // const dataFromDb = await fetch("https://react-database-16425-default-rtdb.firebaseio.com/mealsdata")
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://react-database-16425-default-rtdb.firebaseio.com/meals.json")
            const responseData = await response.json();
            console.log(response)
            if (response.status !== 200) {
                throw Error("Not a good response");
            }
            const loadedData = [];
            for (const responseKey in responseData) {
                const item = responseData[responseKey]
                loadedData.push({
                    id: responseKey,
                    name: item.name,
                    description: item.description,
                    price: item.price
                });
            }
            setData(loadedData)
        }
        fetchData();
    }, [])

    const mealsList = data.map(meal =>
        <MealItem key={meal.id}
                  title={meal.name}
                  id={meal.id}
                  price={meal.price}
                  description={meal.description}
        >
        </MealItem>);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;