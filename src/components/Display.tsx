import React, {useState} from 'react';

let displayMessage = "enter value and press 'set'"
export const Display = () => {
    const [display, setDisplay] = useState(displayMessage)
    return (
        <div>
            <h2>{display}</h2>
        </div>
    );
};
