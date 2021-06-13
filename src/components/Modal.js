import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadImgBig, updateCom} from "../redux/actions";
import {NavLink, useParams} from "react-router-dom";
import ReactLoading from 'react-loading';
import Comments from "./Comments";

function Modal(props) {
    const modal = useSelector(state => state.imgBig.items);
    const loading = useSelector(state => state.imgBig.loading);
    const loadingCom = useSelector(state => state.imgBig.loadingCom);
    const dispatch = useDispatch();
    const id = useParams().id;

    useEffect(() => {
        dispatch(loadImgBig(id))
    }, [dispatch, id]);

    const[name, setName] = useState('');
    const[text, setText] = useState('');

    const handleChangeName = (e) =>{
        setName(e.target.value)
    }
    const handleChangeComment = (e) =>{
        setText(e.target.value)
    }

    const handleAddComments = (id,text,name) =>{
        setText('');
        setName('');
        dispatch(updateCom(id, text, name))
    }

    return (
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
                                        value={name}
                                        onChange={handleChangeName}
                                    />
                                    <input
                                        type="text"
                                        placeholder='Ваш комментарий'
                                        value={text}
                                        onChange={handleChangeComment}
                                    />
                                    <button className='btnAdd' onClick={() => handleAddComments(props.id,text,name)}>
                                        Оставить комментарий
                                    </button>
                                </div>
                            </div>
                            {loadingCom ? (
                                <div className="loading">
                                    <ReactLoading type='spin' color='#0044ff' height={50} width={50}/>
                                </div>
                                ): (
                                <div className='modal_comments'>
                                    {modal.comments !== undefined ? (modal.comments.map((item,id)=>{
                                        return <Comments item={item} id={id} key={id}/>
                                    })) : (<div>Комментариев нет</div>)}

                                    {/*<div>*/}
                                    {/*    { modal.comments?.map(item => {*/}
                                    {/*        return (*/}
                                    {/*            <div>*/}
                                    {/*                <p>{item.name}</p>*/}
                                    {/*                <p>{item.text}</p>*/}
                                    {/*            </div>*/}
                                    {/*        )*/}
                                    {/*    })}*/}
                                    {/*</div>*/}
                                    {/*<div>*/}
                                    {/*    {modal.text?.map(item =>{*/}
                                    {/*        return <p>{item.text}</p>*/}
                                    {/*    })}*/}
                                    {/*</div>*/}
                                    <div>
                                        <NavLink to='/' activeClassName="selected">X</NavLink>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    )
                }
            </div>
    )
}

export default Modal;