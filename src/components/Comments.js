import React from 'react';
import {useSelector} from "react-redux";
import ReactLoading from "react-loading";

function Comments(props) {
    const loadingCom = useSelector(state => state.imgBig.loadingCom);
    return (
        loadingCom ? (
            <div className="loading">
                <ReactLoading type='spin' color='#0044ff' height={50} width={50}/>
            </div>
            ):(
                    <div className="comments">
                    <div className="author">
                        <div className="name">
                            {props.item.name}
                        </div>
                        <div className="text">
                            {props.item.text}
                        </div>
                    </div>
                </div>
            )
    );
}

export default Comments;