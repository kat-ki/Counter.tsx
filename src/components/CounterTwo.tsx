import React, {useEffect, useState} from 'react';
import '../App.css'
import clsx from "clsx";
import {isDisabled} from "@testing-library/user-event/dist/utils";
import {Button} from "./Button";

type CounterTwoType = {
    maxValue: number
    setMaxValue: (maxValue: number) => void
    minValue: number
    setMinValue: (minValue: number) => void
    isDisabled: boolean
    setIsDisabled: (value: boolean) => void
}

let displayMessage = "enter value and press 'set'"
const CounterTwo = (props: CounterTwoType) => {

    const [display, setDisplay] = useState(displayMessage)
    // const [finalValue, setFinalValue] = useState(props.maxValue)
    const incrementValue = () => {
        let valueStringMin = localStorage.getItem('minValue');
        if (valueStringMin) {
            const newValue = JSON.parse(valueStringMin);
            console.log(newValue)
            setDisplay(newValue);
        }

        /*let valueStringMax = localStorage.getItem('maxValue');
        if (valueStringMax) {
            const newValue = JSON.parse(valueStringMax);
            setDisplay(newValue);
        }*/
    }
// тут выше в функции взять приходящее мин. значение, сделать его стартовым, а приходящее макс. значение сделать окончат.
    const resetValue = () => {
        console.log(display)
        setDisplay(display)
    }


    return (
        <div className={'box'}>
            <div className={'countCentered'}>
                <h2>{display}</h2>
            </div>
            <div className={'btn--box'}>
                <Button onClick={incrementValue}
                    /*disabled={isDisabled}
                    className={clsx(isDisabled && 'buttonDisabled')}*/
                >INC</Button>

                <Button onClick={resetValue}>RESET</Button>
            </div>
        </div>
    );
};

export default CounterTwo;