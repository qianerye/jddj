
const defaultState = {
    nowNav : 'follow',
    data : {}
}

export default (state=defaultState , action) => { 
    switch (action.type) {
        case 'changeNav':
            return {
                nowNav : action.nowNav,
                data : action.data
            }
        default:
            return state
    }
}