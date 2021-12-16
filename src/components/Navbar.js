import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import './Navbar.Styles.css';

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Space Buddy</h1>
      </Link>
      <ul className="nav-meny">
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
      <div className="hamburger">
        <FaBars size={20} style={{ color: '#fff' }} />
      </div>
    </header>
  );
};

export default Navbar;