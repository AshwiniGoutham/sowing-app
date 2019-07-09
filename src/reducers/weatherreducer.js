const weatherReducer = (state = {
    weatherData:[]
}, action) => {
    switch (action.type) {
        case 'LOAD_WEATHER_DATA':
            state = {
                weatherData: action.payload
            }
            return state
        default:
            return state;
    }
}

export default weatherReducer