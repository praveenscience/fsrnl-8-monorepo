import React, { useState } from "react";

const Login = () => {
  const [Reg, setReg] = useState(false);
  return (
    <section className="login-form-wrap">
      <h1>Facebook Clone</h1>
      <form className="login-form">
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
        <input type="submit" value="Login" />
      </form>
      <h5>
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            setReg(reg => !reg);
          }}
        >
          {Reg
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </a>
      </h5>
    </section>
  );
};

export default Login;
