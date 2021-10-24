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
  return <form action="">Form using Stateless Functional Component</form>;
};

export default FormsFunc;
