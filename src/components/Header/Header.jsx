import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from './ActiveLink';
const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/friends">Friend</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/posts">Post</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
        </nav>
    );
};

export default Header;