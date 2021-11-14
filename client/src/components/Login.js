import React from "react";

const Login = () => {
  return (
    <section className="login-form-wrap">
      <h1>Facebook Clone</h1>
      <form className="login-form">
        <label>
          <input type="email" name="email" required placeholder="Email" />
        </label>
        <label>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </label>
        <input type="submit" value="Login" />
      </form>
      <h5>
        <a href="/">Forgot password</a>
      </h5>
    </section>
  );
};

export default Login;