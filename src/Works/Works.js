import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../Common/styles/Container.module.scss';
import Work from "./Work/Work";
import Fade from "react-reveal/Fade";

function Works() {
    const descriptionTodolist = 'Classic frontend development with improved functionality.'
    const descriptionCounter = 'An interesting counter that uses the most hooks was made with great love.'
    const descriptionStarWars = 'A guide to the Star Wars universe from a dedicated fan and developer. '
    const descriptionAnotherProject = 'Project in progress...'

    const sw = 'http://images.vfl.ru/ii/1617212554/52c9afe9/33897026_m.jpg'
    const todo = 'http://images.vfl.ru/ii/1617212554/8b011566/33897027_m.jpg'
    const counter = 'http://images.vfl.ru/ii/1617212554/36711f18/33897025_m.jpg'
    const another = 'http://images.vfl.ru/ii/1617212554/67136445/33897024_m.jpg'

    const todoRef = 'https://github.com/RomanRadaykinFrontend/todo-list'
    const starWarsRef = 'https://github.com/RomanRadaykinFrontend/todo-list'
    const counterRef = 'https://github.com/RomanRadaykinFrontend/todo-list'

    return (
        <div className={style.worksBlock} id={'works-ref'}>
            <Fade right>
                <div className={`${styleContainer.container} ${style.worksContainer}`}>
                    <h2>Works</h2>
                    <div className={style.works}>
                        <Work title={'TodoList'} refToGit={todoRef} image={todo} description={descriptionTodolist}/>
                        <Work title={'Counter'} refToGit={counterRef} image={counter} description={descriptionCounter}/>
                        <Work title={'StarWars app'} refToGit={starWarsRef} image={sw} description={descriptionStarWars}/>
                        <Work title={'AnotherProject'} image={another} description={descriptionAnotherProject}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Works;
