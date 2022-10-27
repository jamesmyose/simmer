import { link } from "fs";
import * as React from "react";
import { Component } from "react";

interface CounterProps {}

interface CounterState {}

class Counter extends React.Component<CounterProps, CounterState> {
    state = {
        count: 1,
        tags: ["tag1", "tag2", "tag3"],
    };

    styles = {
        fontSize: "10px",
        fontWeight: "bold",
    };

    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }

    private getBadgeClasses() {
        let classes: string = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
