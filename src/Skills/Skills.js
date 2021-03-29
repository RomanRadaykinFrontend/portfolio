import React, {createRef, useEffect, useRef, useState, WheelEventHandler} from 'react';
import style from './Skills.module.scss';
import styleContainer from '../Common/styles/Container.module.scss';
import Skill from "./Skill/Skill";
import Fade from "react-reveal/Fade";

function Skills() {
    const descr = 'Ut enim ad minima veniam,' +
        ' quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ';

    let [start, setStart] = useState(false);


    const divRef = createRef()

    useEffect(() => {
        document.addEventListener('scroll', onScroll);
    }, [])

    const onScroll = () => {
        let block = divRef.current;
        if (block) {
            const scrollTopDiv = block.offsetTop;
            const yWindow = window.pageYOffset + window.innerHeight;
            if (yWindow >= scrollTopDiv) {
                setStart(true)
            }
        }

    };


    return (
        <div className={style.skillsBlock} id={'skills-ref'}>
            <Fade left>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <h2>Skills</h2>
                    <div className={style.skills} ref={divRef}>
                        <Skill title={'HTML/CSS'} description={descr}
                               maxValue={94} start={start}/>
                        <Skill title={'JavaScript'} description={descr}
                               maxValue={85} start={start}/>
                        <Skill title={'React'} description={descr}
                               maxValue={93} start={start}/>
                        <Skill title={'Redux'} description={descr}
                               maxValue={88} start={start}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
