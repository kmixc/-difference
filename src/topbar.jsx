import React from 'react'
import Logo from './logo.svg'
import './App.css';
import About from './about/About';
import Home from './Home';
import Shop from './shop/Shop';
import Contact from './contact/Contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

export default function topbar() {
    return (
        <Router>
            <nav className="navBar">
                <Link to="/home">home.</Link>
                <Link to="/shop">shop.</Link>
                <img src={Logo} alt="logo"></img>
                <Link to="/about">about.</Link>
                <Link to="/contact">contact.</Link>
            </nav>

            <Switch>
                <Redirect exact from="/" to="home" />
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/shop">
                    <Shop />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    )
}
