import React from 'react';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa';
import './Footer.Styles.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p>123 Acme St.</p>
                            <h4>Austin, Tx</h4>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            1-800-123-4321
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            Lonelybuddy@gmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About the company</h4>
                    <p>
                        "Aliqua aute nostrud voluptate cupidatat reprehenderit proident eiusmod sit deserunt excepteur
                        quis. Elit amet excepteur culpa minim. Laboris exercitation dolor quis non irure fugiat qui.
                        Ipsum do minim labore ad aliqua. Consequat eu laborum consequat dolore qui veniam."
                    </p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
