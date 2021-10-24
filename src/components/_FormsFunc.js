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
  return (
    <form>
      {Object.keys(Forms).map(key => (
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
};

export default FormsFunc;
