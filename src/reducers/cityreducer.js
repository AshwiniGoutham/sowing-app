const cityReducer = (state = {
    cityList:[],
    citySelected:'Bangalore'
}, action) => {
    switch (action.type) {
        case 'LOAD_CITIES':
            state = {
                cityList : action.payload
            }
            return state;
        case 'SELECTED_CITY':
                state = {
                    ...state,
                    citySelected : action.payload
                }
            return state;
        default:
            return state;
    }

}

export default cityReducer;