import * as React from "react";
import Counter from "./counter";

function Counters({ onReset, counters, onDelete, onIncrement }: any) {
    return (
        <React.Fragment>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">
                Reset
            </button>
            {counters.map((counter: any) => (
                <div>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    ></Counter>
                </div>
            ))}
        </React.Fragment>
    );
}

export default Counters;
