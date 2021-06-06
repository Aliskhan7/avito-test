import React from 'react';
import {useSelector} from "react-redux";
import Img from './Img'

function Images(props) {
    const imgs = useSelector(state => state.img.items)
    return (
        <div className='main-content-item'>
            {imgs.map(img =>{
                return  <Img img={img} key={img.id}/>
            })}
        </div>
    );
}

export default Images;