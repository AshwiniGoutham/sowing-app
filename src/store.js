import { createStore, combineReducers } from 'redux';

import stateReducer from './reducers/statereducer'
import cityReducer from './reducers/cityreducer'
import grainReducer from './reducers/grainreducer'
import dateReducer from './reducers/datereducer'
import soilTypeReducer from './reducers/soilreducer' 
import weatherReducer from './reducers/weatherreducer'

const store = createStore(combineReducers({
    states:stateReducer,
    city:cityReducer,
    grains:grainReducer,
    datepick:dateReducer,
    soiltype:soilTypeReducer,
    weather:weatherReducer
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;