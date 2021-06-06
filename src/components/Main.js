import React from 'react';
import Images from "./Images";
import ImagesBig from "./ImagesBig";

function Main(props) {
    return (
        <div className='main-content'>
            <Images/>
            <ImagesBig/>
        </div>
    );
}

export default Main;