import React from 'react'
import { connect } from 'react-redux';

class SoilTypeDropdown extends React.Component {
    componentDidMount(){
        fetch("http://localhost:44380/api/products/GetSoilType").
        then( res => res.json()).
        then( (result) => {
            this.props.loadSoilType(result)
        })
    }
    render(){
        return(
            <select id="grains" className="form-control" onChange={(e) => this.props.soilTypeSelected(e.target.value)}>
                <option>None</option>
                {
                    this.props.soilTypeList.map( (item,index) => 
                        <option value={item} key={index}>{item}</option>
                    )
                }
            </select>
            )
    } 
}

function mapStateToProps(state){
    return{
        soilTypeList : state.soiltype.soilTypeList,
        soilTypeSelected : state.soiltype.soilTypeSelected
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadSoilType : (result) =>
            dispatch({
                type : "LOAD_SOILTYPE",
                payload : result
            }),
        soilTypeSelected : (item) =>
            dispatch({
                type : "SOIL_TYPE_SELECTED",
                payload : item
            })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SoilTypeDropdown);