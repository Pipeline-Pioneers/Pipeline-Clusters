import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import videoBg from '../../assets/vid1.mp4';
import logo from '../../assets/pmovie.jpeg';

// Footer component
const Footer = () => {
    return (
        <div className="footer">
            {/* Background video */}
            <video className="footer__video-bg" autoPlay loop muted>
                <source src={videoBg} type="video/mp4" />
            </video>
           
            {/* Footer logo */}
            <div className="footer__content__logo">
                <div className="logo">
                    <img src={logo} alt="" />
                    <a href="/">Pipeline Cluster</a>
                </div>
            </div>

            {/* Footer menu Links */}
            <div className="footer__content__menus">
                <div className="footer__content__menu">
                    <a href="/">Home</a>
                </div>
                <div className="footer__content__menu">
                    <a href="/movies">Movies</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;