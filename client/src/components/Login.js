import React, { useState } from "react";

const Login = ({ handleLogin, handleRegister }) => {
  const [Reg, setReg] = useState(false);
  const [FormData, setFormData] = useState({
    username: "",
    password: ""
  });
  const InpMap = {
    username: {
      type: "text",
      placeholder: "Username"
    },
    password: {
      type: "password",
      placeholder: "Password"
    },
    confpass: {
      type: "password",
      placeholder: "Confirm Password"
    },
    fullname: {
      type: "text",
      placeholder: "Full Name"
    },
    location: {
      type: "text",
      placeholder: "Current Location"
    },
    email: {
      type: "email",
      placeholder: "Email Address"
    },
    avatar: {
      type: "text",
      placeholder: "Your Avatar URL"
    },
    birthday: {
      type: "date",
      placeholder: "Enter your Birthday"
    }
  };
  const handleChange = e => {
    const newFormData = {
      ...FormData
    };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };
  const handleLoginRegToggle = e => {
    e.preventDefault();
    setReg(reg => {
      if (!reg) {
        setFormData(fd => ({
          ...fd,
          confpass: "",
          fullname: "",
          location: "",
          email: "",
          avatar: "",
          birthday: ""
        }));
      } else {
        setFormData(fd => ({
          username: fd.username,
          password: fd.password
        }));
      }
      return !reg;
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (Reg) {
      handleRegister(FormData);
    } else {
      handleLogin(FormData);
    }
  };
  return (
    <section className="login-form-wrap">
      <h1>Facebook Clone</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-content">
          {Object.keys(FormData).map(fd => (
            <label key={fd}>
              <input
                type={InpMap[fd].type}
                name={fd}
                required={true}
                placeholder={InpMap[fd].placeholder}
                onChange={handleChange}
              />
            </label>
          ))}
        </div>
        <input type="submit" value={Reg ? "Register" : "Login"} />
      </form>
      <h5>
        <a href="/" onClick={handleLoginRegToggle}>
          {Reg
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </a>
      </h5>
    </section>
  );
};

export default Login;
