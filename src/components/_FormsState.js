import React, { Component } from "react";
import FormGroup from "./Bootstrap/FormGroup";

class FormsState extends Component {
  state = {
    Username: "",
    FullName: "",
    Password: "",
    ConfPass: ""
  };
  handleChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
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
            onChange={this.handleChange}
          />
        ))}
        <pre className="border rounded bg-light p-2">
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </form>
    );
  }
}

export default FormsState;
