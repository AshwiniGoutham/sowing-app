const grainReducer = (state = {
    grainList:[],
    grainSelected: ''
}, action) => {
    switch (action.type) {
        case "LOAD_GRAINS":
            state = {
                grainList: action.payload
            }
            return state;
        case "GRAIN_SELECTED":
            state = {
                ...state,
                grainSelected: action.payload
            }
            return state;
        default:
            return state;
    }
}

export default grainReducer;