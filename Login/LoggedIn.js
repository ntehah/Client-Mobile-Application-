import React from "react";
import Volunteer from "../Volunteer/Volunteer";


class LoggedIn extends React.Component {
  state = {
    type: "Volunteer",
  };
  render() {
    return (
      <Volunteer/>
    );
  }
}


export default LoggedIn;
