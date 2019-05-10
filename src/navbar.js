import React from 'react';
import {NavLink} from 'react-router-dom';

function navbar(){
    return(
        <div className='navbar'>
            <div className='navbarLogo'>
            </div>
            <ul className="navbarLinks">
                <NavLink to="/home" style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/about" style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                    <li>About</li>
                </NavLink>
                <NavLink to="/portfolio" style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                <li>Portfolio</li>
                </NavLink>
                <NavLink to="/content" style={{textDecoration: 'none', color: 'inherit'}} activeClassname='active'>
                <li>Content</li>
                </NavLink>
            </ul>
        </div>
    );
}

export default navbar;