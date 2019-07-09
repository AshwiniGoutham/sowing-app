import React from 'react'
import { connect } from 'react-redux';
import { stat } from 'fs';
import Weatherlist from './weatherlist';


class ViewResult extends React.Component {

    showWeatherForecast = (e) => {
        fetch("http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=08afb606a92ff8048e60878bf933c1cb&q=bangalore").
        then( res => res.json()).
        then( (result) => {
            const dates = result.list.map((item, i) => {
				return item.dt_txt.split(" ")[0];
			})
			.filter((item, i, currArr) => {
				return currArr.indexOf(item) === i;
			});

		// console.log('dates', dates);

		// create a new object with those dates as keys
		let sortedResults = [];
		for(let theDate of dates) {
			sortedResults.push({
				name: theDate,
				weathers: []
			});
		}

		// for each item in the json.list
		for(let item of result.list) {
			let itemDate = item.dt_txt.split(" ")[0]; // get the date in string form

			//if sortedResults.name = itemDate then push that item into that sortedResult's weathers array
			for(let result of sortedResults) {
				if(result.name === itemDate) {
					result.weathers.push(item);
				}
			}
		}

		// console.log('sortedResults', sortedResults);
		//return sortedResults;
            this.props.loadWeatherData(sortedResults)
            console.log(this.props.weatherData)
        })

        // fetch("http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=08afb606a92ff8048e60878bf933c1cb&q=bangalore").
        // then( res => res.json()).
        // then( (result) => {
        //     this.props.loadWeatherData(result)
        //     console.log(this.props.weatherData)
        // })

    }
    render() {
        return (   
            <input type="submit" value="View Result" onClick={this.showWeatherForecast} className="btn btn-dark"/>
        )
    }
}

function mapStateToProps(state) {
    return {
        city: state.city.citySelected,
        weatherData: state.weather.weatherData
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadWeatherData : (weatherData)  =>
            dispatch({
                type : "LOAD_WEATHER_DATA",
                payload : weatherData
            })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewResult);