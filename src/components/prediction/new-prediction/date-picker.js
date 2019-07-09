import React from "react";
import DatePicker from "react-datepicker";
import {connect} from 'react-redux'
import './datepicker.css'
import "react-datepicker/dist/react-datepicker.css";
 
class DatePickerJS extends React.Component {
 
  handleChange = (e) =>{
    this.props.storeDateSelected(e)
  }
 
  render() {
    return (
      <DatePicker
        selected={this.props.dateSelected}
        onChange={this.handleChange}
        className="datePicker"
      />
    );
  }
}

function mapStateToProps(state){
    return {
        dateSelected : state.datepick.dateSelected
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeDateSelected : (selectedDate) => dispatch({
            type : 'DATE_SELECTED',
            payload : selectedDate
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DatePickerJS);