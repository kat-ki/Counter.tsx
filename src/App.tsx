import React from 'react';
import './App.css'
import {Counter} from "./components/Counter";
import {ImprovedCounter} from "./components/ImprovedCounter";

const App = () => {

    return (
        <div className={'wrapper'}>
           {/* <ImprovedCounter />*/}
            <Counter/>
        </div>
    );
};

export default App;