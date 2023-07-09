import React from "react";
import classes from './Counter.module.css';

type CounterProps = {
    count: number,
    increment: VoidFunction,
};

export const Counter = ({ count, increment }: CounterProps) => {
    return <div>{count}
    <br/>
    <button className={classes.fancyButton} onClick={increment}>Increment</button>
    </div>;
};
