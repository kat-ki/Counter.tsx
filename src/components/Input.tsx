import React, { ChangeEvent, ComponentProps, ReactNode } from "react";

type InputType = {
    value: string
    setValue: (value: string) => void
}
export const Input = (props: InputType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value);
    }
    return (
        <input
            value={props.value}
            onChange={onChangeHandler}
            type='number'
            min='0'
            step='1'
            className={'upDown'}
        />
    )
}

//
// import React from "react";
//
// type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {}
// export const Input = ({ children, ...props }: InputType) => {
//
//     return (
//         <input
//             {...props}
//         />
//     )
// }

