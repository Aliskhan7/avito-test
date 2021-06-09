import React from 'react';
import Images from "./Images";
import Modal from "./Modal";
import {Route} from "react-router-dom";

function Main(props) {
    return (
        <div className='main-content'>
            <Images/>
            <Route path="/:id?">
                <Modal/>
            </Route>
        </div>
    );
}

export default Main;