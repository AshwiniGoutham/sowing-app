import React from 'react'
import './map.css'
import { connect } from 'react-redux';
class LoadMap extends React.Component {

    render() {
        let showMap;
        
        let url = "https://maps.google.com/maps?q=" + this.props.citySelected + "&t=&z=10&ie=UTF8&iwloc=&output=embed"
        if(this.props.citySelected !== undefined && this.props.citySelected !== ""){
            showMap = <div className="col-lg-7">
                <div id="map-container-google-1" className="z-depth-1-half map-container map-pos" style={{ height: 500 }}>
                    <iframe src={url}
                        style={{ border: 0 }}></iframe>

                </div>
            </div>
        } else {
            showMap = <div></div>
        }
    
        
        return (
            <div>{showMap}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        citySelected: state.city.citySelected
    }
}

export default connect(mapStateToProps, {})(LoadMap);