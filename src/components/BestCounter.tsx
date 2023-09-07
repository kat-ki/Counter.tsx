import React, {useEffect, useState} from 'react';
import '../App.css'
import clsx from "clsx";
import {isDisabled} from "@testing-library/user-event/dist/utils";
import {Button} from "./Button";

type BestCounterType = {
    maxValue: number
    setMaxValue: (maxValue: number) => void
    minValue: number
    setMinValue: (minValue: number) => void
    isDisabled: boolean
    setIsDisabled: (value: boolean) => void
}
const BestCounter = (props: BestCounterType) => {

    const [startValue, setStartValue] = useState(props.minValue)
    const [finalValue, setFinalValue] = useState(props.maxValue)
    const incrementValue = () => {
        let valueString = localStorage.getItem('minValue');
        if (valueString) {
            const newValue = JSON.parse(valueString);
        } setStartValue(newValue => newValue + 1); // ???????????????????????????
    }
// тут выше в функции взять приходящее мин. значение, сделать его стартовым, а приходящее макс. значение сделать окончат.
    const resetValue = () => {

    }


    return (
        <div className={'box'}>
            <div className={'countCentered'}>
                // тут ниже указать либо ошибку "enter value and press 'set' либо установить приходящее мин. значение
                <h2>{props.minValue}</h2>
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

export default BestCounter;