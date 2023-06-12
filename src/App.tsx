import React from 'react';
import { Counter } from "./components/Counter";
import './App.css'
import { ImprovedCounter } from "./components/ImprovedCounter";

const App = () => {

    return (
        <div className={'wrapper'}>
            <ImprovedCounter />
        </div>
    );
};

export default App;