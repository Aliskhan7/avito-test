import React from 'react';
import {NavLink} from "react-router-dom";

function Img(props) {
    return (
        <div className='content-img'>
            <NavLink to={`/modal/${props.img.id}`}>
                <img src={props.img.url} alt=""/>
            </NavLink>
        </div>
    );
}

export default Img;