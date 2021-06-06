import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import imgReducer from "./img";
import imgBigReducer from "./imgBig";

const logger = createLogger({
    diff: true,
    collapsed: true
})
const rootReducer = combineReducers({
    img: imgReducer,
    imgBig: imgBigReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store