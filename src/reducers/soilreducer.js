const soilTypeReducer = (state = {
    soilTypeList:[],
    soilTypeSelected: ''
}, action) => {
    switch (action.type) {
        case "LOAD_SOILTYPE":
            state = {
                soilTypeList: action.payload
            }
            return state;
        case "SOIL_TYPE_SELECTED":
            state = {
                ...state,
                soilTypeSelected: action.payload
            }
            return state;
        default:
            return state;
    }
}

export default soilTypeReducer;