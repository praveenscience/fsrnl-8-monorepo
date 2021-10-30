import { useState } from "react";
import FormGroup from "./Bootstrap/FormGroup";

const FormsFunc = () => {
  const [Forms, setForms] = useState({
    Username: "",
    FullName: "",
    Password: "",
    ConfPass: ""
  });
  const Mapper = {
    Username: ["text", "Username"],
    FullName: ["text", "FullName"],
    Password: ["password", "Password"],
    ConfPass: ["password", "Confirm Password"]
  };
  const handleChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    const NewForms = { ...Forms };
    NewForms[e.target.name] = e.target.value;
    setForms(NewForms);
  };
  return (
    <form>
      {Object.keys(Forms).map(key => (
        <FormGroup
          key={key}
          Label={Mapper[key][1]}
          Id={key}
          Type={Mapper[key][0]}
          Desc={`Please enter the value for ${Mapper[key][1]}.`}
          onChange={handleChange}
          Value={Forms[key]}
        />
      ))}
      <input
        type="submit"
        value="Register"
        className="btn btn-primary"
        disabled={
          Forms.Username.trim().length < 3 ||
          Forms.FullName.trim().length < 3 ||
          Forms.Password.trim().length < 3 ||
          Forms.ConfPass.trim().length < 3 ||
          Forms.Password !== Forms.ConfPass
        }
      />
      <pre className="border rounded bg-light p-2 mt-4">
        {JSON.stringify(Forms, null, 2)}
      </pre>
    </form>
  );
};

export default FormsFunc;
