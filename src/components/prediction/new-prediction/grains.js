import React from 'react'
import { connect } from 'react-redux';

class GrainDropdown extends React.Component {
    componentDidMount(){
        fetch("http://localhost:44380/api/products/GetAllGrains").
        then( res => res.json()).
        then( (result) => {
            this.props.loadGrains(result)
        })
    }
    render(){
        return(
            <select id="grains" className="form-control" onChange={(e) => this.props.grainSelected(e.target.value)}>
                <option>None</option>
                {
                    this.props.grainList.map( (item,index) => 
                        <option value={item} key={index}>{item}</option>
                    )
                }
            </select>
            )
    } 
}

function mapStateToProps(state){
    return{
        grainList : state.grains.grainList,
        grainSelected : state.grains.grainSelected
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadGrains : (result) =>
            dispatch({
                type : "LOAD_GRAINS",
                payload : result
            }),
        grainSelected : (item) =>
            dispatch({
                type : "GRAIN_SELECTED",
                payload : item
            })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GrainDropdown);