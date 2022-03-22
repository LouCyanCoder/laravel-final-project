import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import Features from "./Features";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Map from "./Map";
import "./App.css";
import "leaflet/dist/leaflet.css";


const App = () => {
    return <div>

        <Landing />

        <div className="mapp"><Map /></div>

        <Features />

        <Contact />

        <AboutUs />

            </div>;
};

export default App;