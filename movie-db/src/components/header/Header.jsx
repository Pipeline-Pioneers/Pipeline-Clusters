import React, { useEffect, useRef } from 'react';
import './header.scss';

import logo from '../../assets/pmovie.jpeg';
import { useLocation } from 'react-router-dom';

// Navigation items for the header
const headerNav =
[
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    }
];

const Header = () =>
{
    const { pathname } = useLocation(); // Get current path
    const headerRef = useRef(null); // Reference to the header element
    const active = headerNav.findIndex(e => e.path === pathname); // Find the active navigation item

    useEffect(() =>
    {
        // Function to shrink the header on scroll
        const shrinkHeader = () =>
        {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
            {
                headerRef.current.classList.add('shrink');
            }
            else
            {
                headerRef.current.classList.remove('shrink');
            }
        }

        window.addEventListener('scroll', shrinkHeader); // Add scroll event listener

        return () =>
        {
            window.removeEventListener('scroll', shrinkHeader); // Clean up event listener on component unmount
        };
    }, []);

    return (
        // Render the header component
        <header ref={headerRef}>
            {/* Logo and navigation items */}
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <a href="/">Pipeline Cluster</a>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <a href={e.path} onClick={(event) => {
                                    event.preventDefault(); // Prevent default React behavior
                                    window.location.href = e.path; // Force page reload
                                }}>
                                    {e.display}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>    
        </header>
    );
}

export default Header;