import React, { Component } from "react";
import FormGroup from "./Bootstrap/FormGroup";

class FormsState extends Component {
  state = {
    Username: "",
    FullName: "",
    Password: "",
    ConfPass: ""
  };
  render() {
    const Mapper = {
      Username: ["text", "Username"],
      FullName: ["text", "FullName"],
      Password: ["password", "Password"],
      ConfPass: ["password", "Confirm Password"]
    };
    return (
      <form>
        {Object.keys(this.state).map(key => (
          <FormGroup
            key={key}
            Label={Mapper[key][1]}
            Id={key}
            Type={Mapper[key][0]}
            Desc={`Please enter the value for ${Mapper[key][1]}.`}
          />
        ))}
      </form>
    );
  }
}

export default FormsState;
