import { render } from "@testing-library/react";
import React, { component } from "react";
import { Link } from "react-router-dom";
import "./Css/Signin.css";
const burl = "";
class Signin extends component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = () => {
    console.log(this.state);
    fetch(burl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem("logintoken", data.token);
        this.props.history.push("/profile");
        // console.log(data.token);
      })
      .catch((err) => {
        this.setState({ error: "Invalid UserName or Password" });
      });
  };

  render() {
    return (
      <div className="signincontainer">
        <div className="home">
          <Link to="/">
            <img
              style={{
                width: "300px",
                height: "200px",
              }}
              src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
              alt="/"
            ></img>
          </Link>
        </div>
        <div className="form1"></div>
        <div className="form2">
          <form action="/action_page.php">
            <div className="sign">
              <h2>Sign in</h2>
            </div>
            <div class="form-group">
              <label for="email">Email address:</label>
              <input
                type="email"
                value={this.state.email}
                class="form-control"
                id="email"
                onChange={this.handleChangeEmail}
              />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input
                type="password"
                value={this.state.password}
                class="form-control"
                id="pwd"
                onChange={this.handleChangePassword}
              />
            </div>
            <div class="checkbox" className="Rememberme">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>
            <button type="button" className="btn1">
              Sign In
            </button>
            <a href="/Loginhelp" className="Needanyhelp">
              Need anyhelp?
            </a>
            <hr></hr>
            <div>
              <h6 className="h6">
                New to Netflix?
                <Link to="/Register" className="signupnow">
                  Sign up now
                </Link>
                <br />
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.Learn more.
              </h6>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
