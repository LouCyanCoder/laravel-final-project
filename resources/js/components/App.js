import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import Features from "./Features";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Map from "./Map";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Link to="/map">Map</Link>
            &nbsp;
            <Link to="/features">Features</Link>
            <div className="mapp">
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/aboutus" element={<AboutUs />} />
                    <Route exact path="/features" element={<Features />} />
                    <Route exact path="/map" element={<React.StrictMode><Map /></React.StrictMode>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;