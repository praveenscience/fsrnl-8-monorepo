import { useState } from "react";

const FormsFunc = () => {
  const [Forms, setForms] = useState({
    Username: "",
    FullName: "",
    Password: "",
    ConfPass: ""
  });
  return <form action="">Form using Stateless Functional Component</form>;
};

export default FormsFunc;
