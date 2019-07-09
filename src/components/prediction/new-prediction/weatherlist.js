import React from 'react'

import { connect } from 'react-redux'
import WeatherForecast from './showweatherforecast';

class WeatherList extends React.Component {

    render() {
        return(
        <WeatherForecast city={this.props.city} country="India" results={this.props.weather} />
        )
        // if (this.props.weather.list !== undefined) {
        //     return (

        //         <table className="table table-striped table-bordered" >
        //             <thead className="thead-dark">
        //                 <tr>
        //                     <th className="w-25">Date</th>
        //                     <th className="w-25">Temperature</th>
        //                     <th className="w-25">Humidity</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {this.props.weather.list.map(item =>
        //                     <tr>
        //                         <td>{item.dt_txt}</td>
                                
        //                         <td>{item.main.temp}</td>
        //                         <td>{item.main.pressure}</td>
                                
        //                     </tr>
        //                 )}

        //             </tbody>
        //         </table>
        //     )
        // }
        // else return (
        //     <div></div>
        // )
    }

}


function mapStateToProps(state) {
    return {
        weather: state.weather.weatherData,
        city: state.city.citySelected
    };
}

export default connect(mapStateToProps)(WeatherList);