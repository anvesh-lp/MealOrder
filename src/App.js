import './App.css';
import Header from "./components/Layout/Header";
import {useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./StoresContexts/CartContextProvider";

function App() {
    const [cartShown, setShowChart] = useState(false);

    const showCartHandler = () => {
        setShowChart(true);
    }
    const hideChowCartHandler = () => {
        setShowChart(false);
    }

    return (
        <CartContextProvider>
            {cartShown && <Cart onCloseButtonClick={hideChowCartHandler}/>}
            <Header onCartButtonClick={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartContextProvider>
    );
}

export default App;
