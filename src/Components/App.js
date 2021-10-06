import React from 'react';
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import Login from './Login';
import Home from './Home';
import Footer from '../Components/Footer'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() { 
  return (
    <div className="App">
 <Router>
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/nav" component={Nav}/>
        <Route path="/shop" component={Shop}/>
        </Switch>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
