import React from 'react';
import style from './Work.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

function Work(props) {

    return (
        <div className={style.work}>
            <div className={style.image}>
            </div>
            <div className={style.info}>
                <a href="#">
                    <h3 className={style.title}>{props.title}</h3>
                </a>
                <div className={style.description}>
                    <span className={style.descriptionBody}>
                        {props.description}
                    </span>
                    <a href="#" className={style.arrow}>
                        <FontAwesomeIcon size={'2x'}  style={{padding: '5px'}} color={'rgb(232, 49, 49)'} icon={faArrowRight}/>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Work;
