import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Training from './pages/Training';
import Contact from './pages/Contact';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/pricing" element={<Pricing />}></Route>
                <Route path="/training" element={<Training />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </>
    );
};

export default App;
