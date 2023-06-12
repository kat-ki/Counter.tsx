import React, { useEffect, useState } from 'react';
import './../App.css'
import { Button } from "./Button";
import clsx from "clsx";

// const INIT_VALUE = 0;
// const MAX_VALUE = 5;
type CounterProps = {
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    isDisabled?: boolean
}
export const Counter = (props: CounterProps) => {
  //  let [count, setCount] = useState(props.startValue);

    useEffect(() => {
        const valueAsString = localStorage.getItem('startValue');
        if(valueAsString) {
            const newValue = JSON.parse(valueAsString);
            props.setStartValue(newValue);
        }
    }, [])
    const increaseCount = () => {
        props.setStartValue(props.startValue + 1);
    }

    const resetCount = () => {
        props.setStartValue(props.startValue);
    }

   const isDisabled = props.startValue >= props.maxValue
    // const makeDisabled = (disabled: boolean) => {
    //     if(props.startValue >= props.maxValue) {
    //         //props.isDisabled(true)
    //     }
    // }
const display = props.startValue <= 0 ? "enter values and press 'set' " : props.startValue
    return (
        <div className={'box'}>
            <div
                className={clsx('count', isDisabled && 'count--disabled')}
            >
                <div className={'display-text'}>{display}</div>
            </div>

            <div className={'btn--box'}>
                <Button onClick={increaseCount} disabled={isDisabled}
                        className={clsx(isDisabled && 'buttonDisabled')}>INC</Button>

                <Button onClick={resetCount}>RESET</Button>
            </div>
        </div>
        
    );
};
