import React from 'react';
import './App.css';
import ApBar from './ApBar.jsx';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import App from './App.jsx';
import Projects from './Projects.jsx';
function Run() {
    return (
        <Router>
            <ApBar />
            <Routes>
                <Route exact path='/Henry-Home/' exact element={<App />} />
                <Route path='/Henry-Home/inventions' element={<Projects />} />
            </Routes>
        </Router>
    );
}

export default Run;