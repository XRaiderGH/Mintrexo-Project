import React from 'react';
import {NavLink} from 'react-router-dom';

function goHome() {
    window.location = '/';
}

function navbar(){
    return(
        <div>
            <div className='navbar'>
            <div className='navbarLogo' onClick={goHome}>
            </div>
            <ul className="navbarLinks">
                <NavLink to="/" exact={true} style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/about" style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                    <li>About</li>
                </NavLink>
                <NavLink to="/portfolio" style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                     <li>Portfolio</li>
                </NavLink>
                <NavLink to="/contact" style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                    <li>Contact</li>
                </NavLink>
                <NavLink to="/blog" style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                    <li>Blog</li>
                </NavLink>
            </ul>
            </div>

            <ul className="navbarLinks2">
                <NavLink to="/" exact={true}  style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/about" style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                    <li>About</li>
                </NavLink>
                <NavLink to="/portfolio" style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                    <li>Portfolio</li>
                </NavLink>
                <NavLink to="/contact" style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                    <li>Contact</li>
                </NavLink>
                <NavLink to="/blog" style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                    <li>Blog</li>
                </NavLink>
            </ul>

        </div>
    );
}

export default navbar;