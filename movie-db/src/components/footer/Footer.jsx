import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import videoBg from '../../assets/vid1.mp4';
import logo from '../../assets/pmovie.png';

const Footer = () => {
    return (
        <div className="footer">
            <video className="footer__video-bg" autoPlay loop muted>
                <source src={videoBg} type="video/mp4" />
            </video>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Pipeline Cluster</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact Us</Link>
                        <Link to="/">Terms of Service</Link>
                        <Link to="/">About Us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Privacy Policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">You Must Watch</Link>
                        <Link to="/">Recent Release</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
