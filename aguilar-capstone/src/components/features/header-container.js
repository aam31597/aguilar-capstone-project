import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../static/capstone-pictures/logo.png';

export default function() {
    return (
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <img src={Logo} />
            </div>

            <div className="nav-link-wrapper">
                <div className="nav-link">
                    <NavLink exact to="/" activeClassName="active-nav-link">Home</NavLink>
                </div>
                
                <div className="nav-link">
                    <NavLink to="/services" activeClassName="active-nav-link">Services</NavLink>
                </div>
                
                <div className="nav-link">
                    <NavLink to="/contact" activeClassName="active-nav-link">Contact</NavLink>
                </div>
            </div>
        </div>
    );
}