import React from 'react';
import './TrainingSection.Styles.css';

import Pod from '../assets/pod.jpg';
import Moon from '../assets/moon.jpg';
import { Link } from 'react-router-dom';

const TrainingSection = () => {
    return (
        <div className="training">
            <div className="left">
                <h1>Training</h1>
                <p>
                    Thorough training is a necessity when traveling to space. We offer all inclusive training for
                    pre-flight and in-flight scenarios.
                </p>
                <Link to="/contact" className="btn">
                    Contact
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="image-stack top">
                        <img src={Moon} className="img" alt="moon" />
                    </div>
                    <div className="image-stack bottom">
                        <img src={Pod} className="img" alt="pod" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingSection;
