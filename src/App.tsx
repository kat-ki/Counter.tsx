import React from 'react';
import './App.css'
import {ImprovedCounter} from "./components/ImprovedCounter";
import BestCounter from "./components/BestCounter";

const App = () => {

    return (
        <div className={'wrapper'}>
           {/* <Counter />*/}
           {/* <ImprovedCounter />*/}
            <BestCounter />
        </div>
    );
};

export default App;