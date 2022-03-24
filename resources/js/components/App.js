import React, { useState, useEffect, useMemo } from "react";
import Landing from "./Landing";
import Features from "./Features";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Map from "./Map";
import Dashboard from "./Dashboard/Dashboard";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserContext } from '../context/context';

const App = () => {


    

    const [user, setUser] = useState({});



    const fetchUser = async () => {
        const response = await fetch('/api/user');
        const result = await response.json();
        result && setUser(result);
        console.log(result);
    }
    console.log(user)

    useEffect(() => {
        fetchUser();
    }, []);


    const userData = useMemo(() => ({ user, setUser }), [user]);

    return (
        <Router>
            <UserContext.Provider value={userData}>
            <Link to="/map">Map</Link>
            &nbsp;
            <Link to="/features">Features</Link>
            <div className="mapp">
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/aboutus" element={<AboutUs />} />
                    <Route exact path="/features" element={<Features />} />
                    <Route exact path="/map" element={<Map />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                </Routes>
                </div>
            </UserContext.Provider>
        </Router>
    );
};

export default App;
