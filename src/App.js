import React from 'react';
import './App.css'
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className={'app'}>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Footer/>
        </div>
    );
}

export default App;
