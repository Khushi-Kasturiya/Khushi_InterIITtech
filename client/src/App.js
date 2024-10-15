// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import './App.css';

const App = () => {
    return (
        // <AuthProvider>
            <Router>
                <Routes>
                    {/* <Route path="/" element={<LoginPage />} /> */}
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </Router>
        // </AuthProvider>
    );
};

export default App;
