export const loadImg = () => {
    return dispatch => {
        dispatch({type: "img/load/start"})
    fetch('https://boiling-refuge-66454.herokuapp.com/images')
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: "img/load/success",
                payload: json
            })
        })
    }
}
export const loadImgBig = (id) => {
    return dispatch => {
        dispatch({type: "imgBig/load/start"})
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "imgBig/load/success",
                    payload: json
                })
            })
    }
}
export const updateCom = (id, text, name) =>{
    return dispatch =>{
        dispatch({
            type: 'comments/load/start'
        })
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                text: text,
                name: name,
            }),
            })
            .then(()=>
                dispatch({
                    type: 'comments/load/success',
                    text: text,
                    name: name,
                }))

    }
}