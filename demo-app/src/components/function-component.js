import React, { useState } from 'react';
import InputForm from './input-component';
import store from '../redux/store';
import APIComponent from './api-display';

function FunctionExample() {
    const [name, setName] = useState(store.getState().name);
    const [message, setMessage] = useState(store.getState().message);

    const unsubscribe = store.subscribe(() => {
        setName(store.getState().name)
        setMessage(store.getState().message)
    })


    return(
        <>
            <div className="FunctionExample">
                <h1>This is a Function Example</h1>
                <p>Hello, {name}. {message}.</p>
            </div>
           
            <InputForm />
            <APIComponent />
        </>
    );
}

export default FunctionExample;