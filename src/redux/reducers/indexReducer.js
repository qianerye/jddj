
const defaultState = {
    topData : {},
    botData : {}
}

export default (state=defaultState , action) => { 
    switch (action.type) {
        case 'getIndexData':
            return {
                topData : action.topData,
                botData : action.botData
            }
        default:
            return state
    }
}