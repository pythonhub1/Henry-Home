import React from 'react';
import './App.css';
import ApBar from './ApBar.jsx';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import App from './App.jsx';
import Projects from './Projects.jsx';
import Drone from './Drone.jsx'
import Login from './Login.jsx'
function Run() {
    return (
        <Router>
            <ApBar />
            <Routes>
                <Route exact path='/Henry-Home/login/' element={<Login />} />
                <Route exact path='/Henry-Home/' element={<App />} />
                <Route exact path='/inventions/' element={<Projects />} />
                <Route exact path='/my-drone/' element={<Drone />} />

            </Routes>
        </Router>
    );
}

export default Run;
