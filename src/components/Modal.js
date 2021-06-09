import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { loadImgBig} from "../redux/actions";
import {NavLink, useParams} from "react-router-dom";
import ReactLoading from 'react-loading';

function Modal(props) {
    const modal = useSelector(state => state.imgBig.items);
    const loading = useSelector(state => state.imgBig.loading);
    const dispatch = useDispatch();
    const params = useParams().id;

    useEffect(() => {
        dispatch(loadImgBig(params))
    }, [dispatch, params]);

    const[text, setText] = useState('');

    const[comments, setComments] = useState([{
        comments: 'Очень чОтко'
    }]);


    const handleAddComments = () =>{
        setComments([
            ...comments,
            {
                comments: text
            }
        ]);
        setText('');
    }

    return (
        params ? (
            <div className='modal__block'>
                {
                    loading ? (
                        <div className="loading">
                            <ReactLoading type='spin' color='#0044ff' height={50} width={50}/>
                        </div>
                    ) : (
                        <div className='modal'>
                            <div className='modal_photos'>
                                <img src={modal.url} alt=""/>
                                <div className='modal_photos__add'>
                                    <input
                                        type="text"
                                        placeholder='Ваше имя'
                                    />
                                    <input
                                        type="text"
                                        placeholder='Ваш комментарий'
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                    />
                                    <button className='btnAdd' onClick={handleAddComments}>
                                        Оставить комментарий
                                    </button>
                                </div>
                            </div>

                            <div className='modal_comments'>
                                <div>
                                    {modal.comments && modal.comments.map(item => {
                                        return (
                                            <div>
                                                <p>{item.text}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div>
                                    {comments.map(item =>{
                                        return <p>{item.comments}</p>
                                    })}
                                </div>

                            </div>
                            <div>
                                <NavLink to='/' activeClassName="selected">X</NavLink>
                            </div>
                        </div>
                    )
                }
            </div>

        ) : ''

    )
}

export default Modal;