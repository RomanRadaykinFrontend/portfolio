import React from 'react';
import style from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll"

function Nav() {
    return (
        <nav className={style.nav}>
            <Link to="skills-ref" smooth={true}>Skills</Link>
            <Link to="works-ref" smooth={true}>Works</Link>
            <Link to="contacts-ref" smooth={true}>Contacts</Link>
        </nav>
    );
}

export default Nav;
