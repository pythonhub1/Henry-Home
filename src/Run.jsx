import React from 'react';
import './App.css';
import ApBar from './ApBar.jsx';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import App from './App.jsx';
import Projects from './Projects.jsx';
import Drone from './Drone.jsx'
function Run() {
    return (
        <Router>
            <ApBar />
            <Routes>
                <Route exact path='/Henry-Home/' element={<App />} />
                <Route path='/inventions/' element={<Projects />} />
                <Route path='/inventions/my-drone/' element={<Drone />} />
            </Routes>
        </Router>
    );
}

export default Run;
