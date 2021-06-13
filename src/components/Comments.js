import React from 'react';
import {useSelector} from "react-redux";
import ReactLoading from "react-loading";

function Comments(props) {
    const loadingCom = useSelector(state => state.imgBig.loadingCom);
    return (
        loadingCom ? (
            <div className="loading">
                <ReactLoading type='spin' color='#0044ff' height={16} width={16}/>
            </div>
            ):(
                <div className="comments">
                        <div className="name">
                            Имя: <br/>
                            {props.item.name}
                        </div>
                        <div className="text">
                            Комментарий:<br/>
                            {props.item.text}
                        </div>
                </div>
            )
    );
}

export default Comments;