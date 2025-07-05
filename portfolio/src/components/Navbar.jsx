import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">My Portfolio</div>
            <ul>
                <li><a href="#intro">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
            <button  className="toggle-btn" onClick={() => {
                document.body.classList.toggle('dark-mode');
            }}>Toggle Theme</button>

        </nav>

    );
};

export default Navbar;