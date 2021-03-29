import React, {useEffect, useState} from 'react';
import style from './Skill.module.scss';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Skill(props) {

    const [value, setValue] = useState(0)

    useEffect(() => {
        if (props.start) {
            const intervalTimer = setInterval(() => {
                setValue(value => {
                    if (value < props.maxValue) {
                        return value + 1
                    } else {
                        clearInterval(intervalTimer)
                        return value
                    }
                })
            }, 20)
        }
    }, [props.start])

    const circularVarStyles = buildStyles({pathColor: `rgb(232, 49, 49)`, textSize: '30px',
        textColor: 'rgb(232, 49, 49)', trailColor: 'white'})


    return (
        <div className={style.skill}>
            <div className={style.aboutSkill}>
                <div className={style.icon}>
                    <CircularProgressbar styles={circularVarStyles} value={value} text={`${value}`}/>
                </div>

                <h3 className={style.title}>{props.title}</h3>
            </div>

            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
}

export default Skill;
