const initialState = {
    items: [],
    loading: false
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
        default:
            return state
    }
}
export default imgBigReducer;