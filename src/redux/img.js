const initialState = {
    items: [],
    loading: false
}

const imgReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'img/load/start':
            return{
                ...state,
                loading: true
            }
        case 'img/load/success':
            return{
                ...state,
                items: action.payload,
                loading: false
            }
        default:
            return state
    }
}
export default imgReducer;