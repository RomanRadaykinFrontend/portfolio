import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../Common/styles/Container.module.scss';
import Work from "./Work/Work";
import Fade from "react-reveal/Fade";

function Works() {
    const descr = 'Ut enim ad minima veniam,' +
        ' quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ';

    return (
        <div className={style.worksBlock} id={'works-ref'}>
            <Fade right>
                <div className={`${styleContainer.container} ${style.worksContainer}`}>
                    <h2>Works</h2>
                    <div className={style.works}>
                        <Work title={'TodoList'} description={descr}/>
                        <Work title={'Counter'} description={descr}/>
                        <Work title={'StarWars app'} description={descr}/>
                        <Work title={'AnotherProject'} description={descr}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Works;
