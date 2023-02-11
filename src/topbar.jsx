import React from 'react'
import Logo from './logo.svg'
import './App.css';
import About from './about/About';
import Home from './Home';
import Shop from './shop/Shop';
import Contact from './contact/Contact';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

export default function topbar() {
    return (
        <BrowserRouter>
            <nav className="navBar">
                <Link to="/home">home.</Link>
                <Link to="/shop">shop.</Link>
                <img src={Logo} alt="logo"></img>
                <Link to="/about">about.</Link>
                <Link to="/contact">contact.</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
