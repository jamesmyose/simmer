import { count } from "console";
import * as React from "react";
import { Component, useState } from "react";
import Counter from "./counter";

function Counters() {
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
            counters.filter((c) => c.id !== counterId);
        setCounters(newCounters);
    };

    return (
        <React.Fragment>
            <button
                onClick={handleReset}
                className="btn btn-primary btn-sm m-2"
            >
                Reset
            </button>
            {counters.map((counter) => (
                <div>
                    <Counter
                        key={counter.id}
                        onDelete={handleDelete}
                        counter={counter}
                    ></Counter>
                </div>
            ))}
        </React.Fragment>
    );
}

export default Counters;
