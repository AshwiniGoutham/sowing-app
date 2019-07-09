const stateReducer = (state = {
    statesList: [],
    stateSelected: '',
    cities:[]
}, action) => {
    switch (action.type) {
        case 'LOAD_STATES':
           state = {
            statesList:action.payload
        };
            return state;
        case 'SELECTED_STATE':
                state = {
                    ...state,
                    stateSelected:action.payload
                };
            return state;
        default:
            return state;
    }
}

export default stateReducer;