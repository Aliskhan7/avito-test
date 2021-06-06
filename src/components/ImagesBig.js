import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { loadImgBig} from "../redux/actions";
import {useParams} from "react-router-dom";
import ImgBig from "./ImgBig";

function ImagesBig(props) {
    const imagesBig = useSelector(state => state.imgBig.items);

    const dispatch = useDispatch();
    const params = useParams();

    useEffect(()=>{
        dispatch(loadImgBig(params.id))
    }, [params])

    return (
        <div>
            {imagesBig.map(imgBig =>{
                return <ImgBig imgBig={imgBig} key={imgBig.id}/>
            })}
        </div>
    );
}

export default ImagesBig;