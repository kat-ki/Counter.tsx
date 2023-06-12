import React, { ChangeEvent, useEffect, useState } from 'react';
import './../App.css'
import { Button } from "./Button";
import clsx from "clsx";
import { Input } from "./Input";
import { Counter } from "./Counter";

// const MAX_VALUE = 10;
// const START_VALUE = 0;

export const ImprovedCounter = () => {
    //const [disabled, setDisabled] = useState(true)
    // ----------- state for max value + localstorage for max value --------------------------------------
    let [maxValue, setMaxValue] = useState(-1);

    useEffect(() => {
        const valueAsString = localStorage.getItem('maxValue');
        if (valueAsString) {
            const newValue = JSON.parse(valueAsString);
            setStartValue(newValue);
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    }, [maxValue])


    // -------------  state for start value + localStorage with start value -------------------------------
    let [startValue, setStartValue] = useState(-1);

    // useEffect(() => {
    //     const valueAsString = localStorage.getItem('startValue');
    //     if(valueAsString) {
    //         const newValue = JSON.parse(valueAsString);
    //         setStartValue(newValue);
    //     }
    // }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
    }, [startValue])

    // const makeDisabled = (disabled: boolean, e: ChangeEvent<HTMLInputElement>) => {
    //     if (startValue >= maxValue || startValue > 0 || maxValue > 0) {
    //         setDisabled(!disabled);
    //         setDisabled(e.currentTarget.disabled)
    //     }
    // }
    const isDisabled = startValue === maxValue || startValue >= maxValue // set button and both input fields get disabled
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue?.(Number(e.currentTarget.value));
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue?.(Number(e.currentTarget.value));
    }
    return (
        <main>
            <div className={'box'}>
                <div
                    className={clsx('count', isDisabled && 'count--disabled')}
                >
                    <div>
                        <div className={'values-text'}>max value:</div>
                        <input type='number'
                               min='0' step='1'
                               className={'upDown'}
                               value={maxValue}
                               onChange={onChangeMaxHandler}

                        />
                        {/*<Input value={maxValue} setValue={onChangeMaxHandler}></Input>*/}
                    </div>

                    <div>
                        <div className={'values-text'}>start value:</div>
                        {/*<Input type='number' min='0' step='1' className={'upDown'} value={startValue} onChange={onChangeStartHandler}></Input>*/}
                        <input type='number'
                               min='0' step='1'
                               className={'upDown'}
                               value={startValue}
                               onChange={onChangeStartHandler} />
                    </div>
                </div>

                <div className={'btn--box'}>
                    <Button onClick={() => setStartValue}
                            // callBack={isDisabled}
                            className={clsx(isDisabled && 'buttonDisabled')}
                    >SET</Button>
                </div>
            </div>
            <div style={{ 'backgroundColor': 'white' }}>here must be space</div>

            <Counter startValue={startValue}
                     setStartValue={setStartValue}
                     maxValue={maxValue}
                     setMaxValue={setMaxValue}
                     isDisabled={isDisabled}
            />
        </main>

    );
};
