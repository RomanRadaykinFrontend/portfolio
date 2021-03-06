import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../Common/styles/Container.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import MessageForm from "./MessageForm/MessageForm";
import Button from "../Common/components/Button/Button";
import Fade from "react-reveal/Fade";


function Footer() {


    return (
        <footer className={style.footerBlock} id={'contacts-ref'}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.footerContainer}`}>
                    <div className={style.teleworkContacts}>
                        <div className={style.text}>
                            <h1>
                                I am ready to <span>telework</span>
                            </h1>
                        </div>
                        <Button refString={'https://drive.google.com/file/d/1Ha337866l145YbLvtILbuO5F1o6_yKsw/view?usp=sharing'}
                                text={'My resume'}/>
                        <div className={style.phone}>
                            <span className={style.numberPhone}>+7 952 277 76 30</span>
                            <span className={style.mail}>roman.radaikin@yandex.ru</span>
                        </div>
                        <div className={style.socialNetworks}>
                            <a className={style.refWrapper} href="https://www.linkedin.com/in/roman-radaykin-80315720b/"><FontAwesomeIcon className={style.iconItem} icon={faLinkedinIn} size={'2x'}/></a>
                            <a className={style.refWrapper} href="https://t.me/radaykinro"><FontAwesomeIcon className={style.iconItem} icon={faTelegramPlane} size={'2x'}/></a>
                            <a className={style.refWrapper} href="https://github.com/RomanRadaykinFrontend"><FontAwesomeIcon className={style.iconItem} icon={faGithub} size={'2x'}/></a>
                        </div>
                    </div>
                    <div className={style.messageForm}>
                        <h3>
                            Contact with me
                        </h3>
                        <MessageForm/>
                    </div>
                </div>
            </Fade>
        </footer>
    );
}

export default Footer;
