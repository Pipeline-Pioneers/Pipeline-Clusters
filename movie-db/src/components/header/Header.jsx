import React, { useEffect, useRef } from 'react';
import './header.scss';
 
import logo from '../../assets/pmovie.jpeg';
import { useLocation } from 'react-router-dom';
 
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
    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const active = headerNav.findIndex(e => e.path === pathname);
 
    useEffect(() =>
    {
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
 
        window.addEventListener('scroll', shrinkHeader);
 
        return () =>
        {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);
 
    return (
        <div ref={headerRef} className="header">
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
        </div>
    );
}
 
export default Header;