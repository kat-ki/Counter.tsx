import React, {useEffect, useState} from 'react';
import '../App.css'
import clsx from "clsx";
import {isDisabled} from "@testing-library/user-event/dist/utils";
import {Button} from "./Button";


const INIT_VALUE = 0;
const MAX_VALUE = 10;

const BestCounter = () => {
    const [value, setValue] = useState(INIT_VALUE)

    const incrementValue = () => {
        setValue(value => value +1)
    }

    const resetValue = () => {
        setValue(INIT_VALUE)
    }


    return (
            <div className={'box'}>
                <div className={'count'}>
                    <h2>{value}</h2>
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