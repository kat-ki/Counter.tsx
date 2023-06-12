import React, { ComponentProps, ReactNode } from "react";

type ButtonType = {
    children: ReactNode
} & ComponentProps<'button'>
export const Button = ({children, ...props}: ButtonType) => {

    return (
            <button
                {...props}
            >
                {children}
            </button>
    )
}