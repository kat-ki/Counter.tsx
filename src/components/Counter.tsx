import React, {useState} from 'react';
import './../App.css'
import {Button} from "./Button";
import clsx from "clsx";
import CounterTwo from "./CounterTwo";

let MAX_VALUE = 0;
let MIN_VALUE = 0;
//let errorText = 'min value should be less than max value'
let btnDisabled = MIN_VALUE > MAX_VALUE && MIN_VALUE === MAX_VALUE

export const Counter = () => {
    let [maxValue, setMaxValue] = useState(MAX_VALUE);
    let [minValue, setMinValue] = useState(MIN_VALUE);
    let [isDisabled, setIsDisabled] = useState(btnDisabled);
    // let [error, setError] = useState(errorText);

    const decrementMaxValue = () => {
        if (maxValue > 0) {
            setMaxValue(maxValue => maxValue - 1);
        }
    }
    const incrementMaxValue = () => {
            setMaxValue(maxValue => maxValue + 1);
    }
    const decrementMinValue = () => {
        if (minValue > 0) {
            setMinValue(minValue => minValue - 1);
        }
    }
    const incrementMinValue = () => {
        if (minValue < maxValue && minValue !== maxValue) {
            setMinValue(minValue => minValue + 1);
        }
    }

    const setOnClick = () => {
            localStorage.setItem('maxValue', JSON.stringify(maxValue));

            localStorage.setItem('minValue', JSON.stringify(minValue));
    }

    return (
        <div className={'generalBox'}>
            <div className={'box'}>
                <div className={'count'}>
                    <h5>Max value:</h5>
                    <Button onClick={decrementMaxValue}
                            className={clsx(isDisabled && 'buttonDisabled')}
                    >-</Button>
                    <h2>{maxValue}</h2>
                    <Button onClick={incrementMaxValue}
                            className={clsx(isDisabled && 'buttonDisabled')}
                    >+</Button>
                </div>

                <div className={'count'}>
                    <h5>Min value:</h5>
                    <Button onClick={decrementMinValue}
                            className={clsx(isDisabled && 'buttonDisabled')}
                    >-</Button>
                    <h2>{minValue}</h2>
                    <Button onClick={incrementMinValue}
                            className={clsx(isDisabled && 'buttonDisabled')}
                    >+</Button>
                </div>

                <div className={'btn--box'}>
                    <Button onClick={setOnClick}
                            className={clsx(isDisabled && 'buttonDisabled')}
                    >SET</Button>
                </div>
            </div>
            <CounterTwo maxValue={maxValue}
                         setMaxValue={setMaxValue}
                         minValue={minValue}
                         setMinValue={setMinValue}
                         isDisabled={isDisabled}
                         setIsDisabled={setIsDisabled}
            />
        </div>

    );
};

