import React from 'react';
import {NavLink} from "react-router-dom";

function Img(props) {
    return (
        <div>
            <NavLink to={`/${props.img.id}`}>
                <img src={props.img.url} alt=""/>
            </NavLink>
        </div>
    );
}

export default Img;