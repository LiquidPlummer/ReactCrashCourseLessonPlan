import React, { useState } from 'react';
import App from '../App';
import { ClassExample } from './class-component';
import FunctionExample from './function-component';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Navbar() {
    // const [name, setName] = useState("Kyle");
    // const [message, setMessage] = useState("This is the message");

    // const propsObject = {
    //     name: name,
    //     message: message,
    //     updateMessage: setMessage
    // }

/*
React router uses <Router> 
<Link to="PATH"> to traverse
<Switch> switch between components to render
<Route> a path to a component
 */
    return(
        <>
            <Router>
                <div className="Navbar">
                    <Link className="NavbarLink" to="/">App</Link>
                    <Link className="NavbarLink" to="/classExample">Class</Link>
                    <Link className="NavbarLink" to="/functionExample">Function</Link>
                </div>

                <div className="Content">
                    <Switch>
                        <Route exact path="/"> 
                            <App /> 
                        </Route>
                        <Route exact path="/classExample">
                            <ClassExample />
                        </Route>
                        <Route exact path="/functionExample">
                            <FunctionExample />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default Navbar;