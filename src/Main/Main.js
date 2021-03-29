import React, {useEffect, useState} from 'react';
import style from './Main.module.scss';
import styleContainer from '../Common/styles/Container.module.scss';
import Tilt from "react-tilt/dist/tilt";
import Fade from "react-reveal/Fade";


function Main() {
    const initialState = {
        actualString: '',
        toggle: false,
        allString: 'make code.'
    }

    let [state, setState] = useState(initialState);

    useEffect(() => {
        if (!state.toggle) {
            const intervalLetters = setInterval(() => {
                setState((state) => {
                    switch (state.actualString) {
                        case '':
                            return {
                                ...state,
                                actualString: state.actualString + state.allString[0]
                            }
                        case 'make code.':
                            clearInterval(intervalLetters)
                            return {
                                ...state,
                                allString: 'not war.',
                                toggle: true
                            }
                        case 'not war.':
                            clearInterval(intervalLetters)
                            return {
                                ...state,
                                allString: 'make code.',
                                toggle: true
                            }
                        default:
                            return {
                                ...state,
                                actualString: state.actualString + state.allString[state.actualString.length]
                            }
                    }
                })
            }, 250)
        } else {
            const intervalDeleteLetters = setInterval(() => {
                setState((state) => {
                    switch (state.actualString) {
                        case '':
                            clearInterval(intervalDeleteLetters)
                            return {
                                ...state,
                                toggle: false
                            }
                        default:
                            return {
                                ...state,
                                actualString: state.actualString.slice(0, state.actualString.length - 1)
                            }
                    }
                })
            }, 100)
        }
    }, [state.toggle])

    return (
        <div className={style.mainBlock}>
            <Fade left>
                <div className={`${styleContainer.container} ${style.mainContainer}`}>
                    <Tilt className="Tilt" options={{max: 25}}>
                        <div className={style.photoWrapper}>
                            <div className={style.photo}></div>
                        </div>
                    </Tilt>

                    <div className={style.text}>
                        <h3>Hi There!</h3>
                        <h1>I am <span>Roman Radaykin</span></h1>
                        <h3>Frontend Developer</h3>
                        <h3 className={style.typed}>{state.actualString + '|'} </h3>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Main;
