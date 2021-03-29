import style from './Button.module.scss';
import React from "react";


const Button = (props) => {
    return <div className={style.button}>
        <a href="#">
            {props.text}
        </a>
    </div>
}

export default Button