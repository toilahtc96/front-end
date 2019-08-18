import React from 'react';
import { MDBDropdownMenu } from 'mdbreact';

class DatePickerPage extends React.Component  {
  getPickerValue = (value) => {
    console.log(value);
  }

  render() {
    return(
      <div>
        <MDBDropdownMenu   />
      </div>
    );
  }
};

export default DatePickerPage;