import React from 'react';
import style from './Header.module.scss';
import Nav from "./Nav/Nav";
import styleContainer from "../Common/styles/Container.module.scss";
import Fade from "react-reveal/Fade";

function Header() {
    return (
        <header className={style.header}>
            <Fade right>
                <div className={`${styleContainer.container} ${style.headerContainer}`}>
                    <Nav/>
                </div>
            </Fade>
        </header>
    );
}

export default Header;
