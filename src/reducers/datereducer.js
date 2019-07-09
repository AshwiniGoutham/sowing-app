const dateReducer = (state = {
    dateSelected: new Date(),
}, action) => {
    switch (action.type) {
        case "DATE_SELECTED":
            state = {
                ...state,
                dateSelected: action.payload
            }
            return state;
        default:
            return state;
    }
}

export default dateReducer;