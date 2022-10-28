import React, { useState } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

function App() {
    const countersArray = [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
    ];
    const [counters, setCounters] = useState(countersArray);

    const handleReset = () => {
        const newCounters = counters.map((c) => {
            c.value = 0;
            return c;
        });
        setCounters(newCounters);
    };

    const handleDelete = (counterId: number) => {
        const newCounters: Array<{ id: number; value: number }> =
            counters.filter((c: any) => c.id !== counterId);
        setCounters(newCounters);
    };

    const handleIncrement = (counter: { id: number; value: number }) => {
        const newCounters = [...counters];
        const index = counters.indexOf(counter);
        newCounters[index] = { ...counter };
        newCounters[index].value++;
        setCounters(newCounters);
    };

    return (
        <React.Fragment>
            <NavBar
                totalCounters={counters.filter((c) => c.value > 0).length}
            />
            <main className="container">
                <Counters
                    counters={counters}
                    onReset={handleReset}
                    onIncrement={handleIncrement}
                    onDelete={handleDelete}
                />
            </main>
        </React.Fragment>
    );
}

export default App;
