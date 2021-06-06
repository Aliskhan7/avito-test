import React from 'react';

function ImgBig(props) {

    return (
        <div className='img-big'>
            <img src={props.imgBig.url} alt=""/>
            <p>
                {props.imgBig.comments}
            </p>
        </div>
    );
}

export default ImgBig;