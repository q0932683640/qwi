function actionCreator(act, data){
    return {
        type: act,
        data: data
    }
}

export default actionCreator;