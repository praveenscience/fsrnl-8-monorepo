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
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const Mapper = {
      Username: ["text", "Username"],
      FullName: ["text", "FullName"],
      Password: ["password", "Password"],
      ConfPass: ["password", "Confirm Password"]
    };
    const { Username, FullName, Password, ConfPass } = this.state;
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
            Value={this.state[key]}
          />
        ))}
        <input
          type="submit"
          value="Register"
          className="btn btn-primary"
          disabled={
            Username.trim().length < 3 ||
            FullName.trim().length < 3 ||
            Password.trim().length < 3 ||
            ConfPass.trim().length < 3 ||
            Password !== ConfPass
          }
        />
        <pre className="border rounded bg-light p-2 mt-4">
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </form>
    );
  }
}

export default FormsState;
