import { link } from "fs";
import * as React from "react";
import { Component } from "react";

interface CounterProps {
    counter: { id: number; value: number };
    onDelete: (counterId: number) => void;
}

interface CounterState {}

class Counter extends React.Component<CounterProps, CounterState> {
    // constructor(props: CounterProps) {
    //     super(props);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    };

    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>

                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </React.Fragment>
        );
    }

    private getBadgeClasses() {
        let classes: string = "badge m-2 bg-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
