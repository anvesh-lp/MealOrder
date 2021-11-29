import React, {useEffect, useState} from 'react';
import classes from "./styles/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals(props) {
    // const dataFromDb = await fetch("https://react-database-16425-default-rtdb.firebaseio.com/mealsdata")
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [haserror,seterror]=useState(false);


    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            const response = await fetch("https://react-database-16425-default-rtdb.firebaseio.com/meals.json")
            const responseData = await response.json();
            if (response.status !== 200) {
                throw Error("Not a good response");
            }
            console.log(response)
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

        fetchData().catch(erroor=>{
            setIsLoading(false);
            seterror(true);
        });

        setIsLoading(false)
    }, []);

    if (isLoading) {
        console.log("In condition")
        return (
            <section className={classes.spinner}><p>Loading......</p></section>
        );
    }
    if (haserror)
    {
        return (
            <section className={classes.mealsError}>
                <p>error loading the data from the firebase</p>
            </section>
        )
    }
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