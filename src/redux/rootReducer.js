function rootReducer(state = {allPost:[]}, action){
    switch(action.type){
        case "getDataPost":
            return { allPost:action.data.data};
        case "getCurrentPost":
            return { allPost:[...state.allPost], currentPost: state.allPost[action.data]};
        default : 
            return state;
    }
}

export default rootReducer;