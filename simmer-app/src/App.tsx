import React from "react";
import "./App.css";
import GroceryList from "./components/groceryList";

function App() {
    return (
        <React.Fragment>
            {/* <NavBar /> */}
            <main className="container">
                {/* <Counters
                    counters={counters}
                    onReset={handleReset}
                    onIncrement={handleIncrement}
                    onDelete={handleDelete}
                /> */}
                <GroceryList></GroceryList>
            </main>
        </React.Fragment>
    );
}

export default App;
