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

    const sw = 'http://images.vfl.ru/ii/1617303741/5dc1ed36/33911285_m.png'
    const todo = 'http://images.vfl.ru/ii/1617303742/814f4a79/33911286_m.png'
    const counter = 'http://images.vfl.ru/ii/1617303743/b1c76006/33911287_m.png'
    const another = 'http://images.vfl.ru/ii/1617303739/976b0d99/33911284_m.png'

    const todoRef = 'https://github.com/RomanRadaykinFrontend/todo-list'
    const starWarsRef = 'https://github.com/RomanRadaykinFrontend/star-wars-app'
    const counterRef = 'https://github.com/RomanRadaykinFrontend/counter'

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
