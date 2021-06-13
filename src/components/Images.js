import React from 'react';
import {useSelector} from "react-redux";
import Img from './Img';
import ReactLoading from 'react-loading';

function Images(props) {
    const imgs = useSelector(state => state.img.items)
    const loading = useSelector(state => state.img.loading);
    return (
        <div className='main-content-item'>
            {
                loading ? (
                    <div className="loading">
                        <ReactLoading type='spin' color='#0044ff' height={50} width={50}/>
                    </div>
                    ) : (
                    imgs.map(img =>{
                        return  <Img img={img} key={img.id}/>
                    })
                )
                }
        </div>
    );
}

export default Images;