import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import About from './about';
import home from './home';
import portfolio from './portfolio';
import contact from './contact';
import blog from './blog';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="wrapper1">
                    <Navbar/>
                    <Switch>
                        <Route path='/portfolio' component={portfolio} />
                        <Route path='/about' component={About}/>
                        <Route path='/contact' component={contact}/>
                        <Route path='/blog' component={blog}/>
                        <Route path='/' exact={true} component={home} />
                    </Switch>
                    <Footer/>
                </div>
            </div>
        </Router>
    );
}

export default App;
