const initialState = {
    items: {},
    loading: false,
    loadingCom: false
}

const imgBigReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'imgBig/load/start':
            return{
                ...state,
                loading: true
            }
        case 'imgBig/load/success':
            return{
                ...state,
                items: action.payload,
                loading: false
            }

        case 'comments/load/start':
            return {
                ...state,
                loadingCom: true,
            }
        case 'comments/load/success':{
            return {
                ...state,
                loadingCom: false,
                items: {
                    ...state.items,
                    comments: [
                        ...state.items.comments,
                        {text: action.text, name: action.name}
                    ]
                }
            }
        }

        default:
            return state
    }
}
export default imgBigReducer;