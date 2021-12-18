import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import './Navbar.Styles.css';

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <header>
            <Link to="/">
                <h1>Space Buddy</h1>
            </Link>
            <ul className={isMenuActive ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/training">Training</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={() => setIsMenuActive(!isMenuActive)}>
                {isMenuActive ? (
                    <FaTimes size={20} style={{ color: '#fff' }} />
                ) : (
                    <FaBars size={20} style={{ color: '#fff' }} />
                )}
            </div>
        </header>
    );
};

export default Navbar;
