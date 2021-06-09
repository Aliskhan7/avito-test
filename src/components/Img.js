import React from 'react';
import {NavLink} from "react-router-dom";
import Modal from "./Modal";

function Img(props) {
    const hendaleModal = () =>{
        return <Modal/>
    }
    return (
        <div>
            <NavLink to={`/${props.img.id}`}>
                <img src={props.img.url} alt="" onClick={hendaleModal}/>
            </NavLink>
        </div>
    );
}

export default Img;