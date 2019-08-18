import React, { Component } from "react";
import { MDBSwitch } from "mdbreact";

class Switch extends Component {
state = {
  switch1: true,
  switch2: false
}

handleSwitchChange = nr => () => {
  let switchNumber = `switch${nr}`;
  this.setState({
    [switchNumber]: !this.state[switchNumber]
  });
}

render() {
  return (
    <label className="switch">
        <input checked type="checkbox" onChange={()=> false} />
        <span className="slider round" />
      </label>
    );
  }
}

export default Switch;