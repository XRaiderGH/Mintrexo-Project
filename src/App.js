import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import About from './about';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="wrapper1">
                    <Navbar/>
                    <Switch>
                        <Route path='/about' component={About} />
                    </Switch>

                </div>
            </div>
        </Router>
    );
}

export default App;
