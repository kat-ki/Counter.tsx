import React, {useEffect, useState} from 'react';
import './../App.css'
import {Button} from "./Button";
import clsx from "clsx";

const INIT_VALUE = 0;
const MAX_VALUE = 5;

/*export const Counter = () => {
    let [count, setCount] = useState(INIT_VALUE);

    /!*  useEffect(() => {
          const valueAsString = localStorage.getItem('startValue');
          if(valueAsString) {
              const newValue = JSON.parse(valueAsString);
              props.setStartValue(newValue);
          }
      }, [])*!/
    const increaseCount = () => {
        setCount(count => count + 1);
    }

    const resetCount = () => {
        setCount(INIT_VALUE);
    }

    const isDisabled = INIT_VALUE >= MAX_VALUE

    const display = INIT_VALUE <= 0 ? "enter values and press 'set' " : INIT_VALUE
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
};*/

