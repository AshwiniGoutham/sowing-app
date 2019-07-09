import React from 'react'
import StatesDropdown from './states'
import CityDropdown from './cities'
import LoadMap from './map';
import GrainDropdown from './grains'
import DatePickerJS from './date-picker'
import SoilTypeDropdown from './soil'
import ViewResult from './viewresult'
import WeatherList from './weatherlist';
import './newpredicition.css'
import sowingApp from '../../../images/sowing.jpg'

class NewPrediction extends React.Component {

    render() {
        return (
            <div>
                <div className="card-header border-0">
                    <div >New Prediction</div>
                </div>
                <div class="container-fluid">
                    <div className="row">
                        <div className="col-sm table-responsive">
                            <table frame="box" cellspacing="10" className="tableCss">
                                <tbody>
                                    <tr>
                                        <td>
                                            <label className="control-label col-sm-offset-2 col-sm-2" htmlFor="states">States</label>
                                        </td>
                                        <td>
                                            <StatesDropdown />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="control-label col-sm-offset-2 col-sm-2" htmlFor="cities">Cities</label>
                                        </td>
                                        <td>
                                            <CityDropdown />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="control-label col-sm-offset-2 col-sm-2" htmlFor="grains">Grains</label>
                                        </td>
                                        <td>
                                            <GrainDropdown />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="control-label col-sm-offset-2 col-sm-2" htmlFor="datepick">Date</label>
                                        </td>
                                        <td>
                                            <DatePickerJS />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="control-label col-sm-offset-2 col-sm-2" htmlFor="soiltype">Type</label>
                                        </td>
                                        <td>
                                            <SoilTypeDropdown />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <ViewResult />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm map"><LoadMap /></div>
                    </div>
                <div className="row">
                    <div className="col-sm">
                        <WeatherList />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default NewPrediction;

