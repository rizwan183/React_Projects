import React from 'react';
import { Route, Link,Redirect, BrowserRouter as Router } from "react-router-dom";
import Home from './home';
import About from './about';
import Services from './services';
import Experience from './experience';
import Portfolio from './portfolio';
import Contact from './contact';
function RouterFun(){
    return(
        <Router> 
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/experience" component={Experience} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />  
        </Router>
    )
}
export default RouterFun;