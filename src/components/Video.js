import React from 'react';
import './Video.Styles.css';

import spaceVideo from '../assets/space.mp4';
import { Link } from 'react-router-dom';

const Video = () => {
    return (
        <div className="hero">
            <video autoPlay loop muted id="video">
                <source src={spaceVideo} type="video/mp4" />
            </video>
            <div className="content">
                <h1>Space Buddy</h1>
                <p>World's first civilian space travel.'</p>
            </div>
            <div>
                <Link to="/training" className="btn">
                    Training
                </Link>
                <Link to="/training" className="btn">
                    Launch
                </Link>
            </div>
        </div>
    );
};

export default Video;
