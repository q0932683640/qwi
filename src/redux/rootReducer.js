import { combineReducers } from "redux";

function techReducer(state = {show: false}, action){
    switch(action.type){
        case "techShow": 
            return {show: true}
        case "techHide":
            return {show: false}
        case "getDataPost":
            return { allPost:action.data.data};
        case "getCurrentPost":
            return { allPost:[...state.allPost], currentPost: state.allPost[action.data]};
        default : 
            return state;
    }
}
function introReducer(state={show: true}, action){
    switch(action.type){
        case "introShow": return {show: true};
        case "introHide": return {show: false};
        default: return state;
    }
}
function authReducer(state = {show: false}, action){
    switch (action.type) {
        case "authLogin":
            return {show: true, login: true, register: false};
        case "authRegister": {
            return {show: true , login: false, register: true};
        }
        case "authHide":
            return {show: false, login: false, register: false}
        default: return state;
    }
}
const rootReducer = combineReducers({introReducer, authReducer, techReducer});

export default rootReducer;