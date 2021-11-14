import React, { useState } from "react";

const Login = () => {
  const [Reg, setReg] = useState(false);
  const [FormData, setFormData] = useState({
    username: "",
    password: ""
  });
  const handleLoginRegToggle = e => {
    e.preventDefault();
    setReg(reg => !reg);
  };
  return (
    <section className="login-form-wrap">
      <h1>Facebook Clone</h1>
      <form className="login-form">
        <div className="login-form-content">
          <label>
            <input
              type="text"
              name="username"
              required={true}
              placeholder="Username"
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              required={true}
              placeholder="Password"
            />
          </label>
          {Reg ? (
            <>
              <label>
                <input
                  type="password"
                  name="confpass"
                  required={true}
                  placeholder="Confirm Password"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="fullname"
                  required={true}
                  placeholder="Full Name"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="location"
                  required={true}
                  placeholder="Current Location"
                />
              </label>
              <label>
                <input
                  type="email"
                  name="email"
                  required={true}
                  placeholder="Email Address"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="avatar"
                  required={true}
                  placeholder="Your Avatar URL"
                />
              </label>
            </>
          ) : null}
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
