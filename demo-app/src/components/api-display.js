import React, { useState } from 'react';
import { titleSearch } from './remote/openmdb-api';
import store from '../redux/store';


function APIDisplay() {
    const [message, setMessage] = useState(store.getState().message);

    //let response = '{this is not really json}';

    let response = titleSearch(message);

    console.log('inside component', response);

    return(
        <>
            <h1>OMDb API Response:</h1>
            <p>{JSON.stringify(response.data)}</p>
        </>
    )
}

export default APIDisplay;