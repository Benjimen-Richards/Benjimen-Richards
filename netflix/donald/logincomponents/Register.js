import { component } from "react";
import { Link } from "react-router-dom";
import "./Css/Register.css";

const url = "";
class Register extends component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  }

  changeHanderName = (e) => {
    this.setState({ name: e.target.value });
  };
  changeHanderEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changeHanderPassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = () => {
    if (
      this.state.name.length > 0 &&
      this.state.email > 10 &&
      this.state.password > 0
    ) {
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      });
      this.props.history.push("/login");
      localStorage.setItem("username", this.state.name);
    } else {
      this.setState({ error: "Please enter valid credential" });
    }
  };
  render() {
    return (
      <div className="Registercontainer">
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
              <h2>Sign up</h2>
            </div>
            <div class="form-group">
              <label for="name"> Enter Name:</label>
              <input
                type="text"
                value={this.state.name}
                className="form-control"
                onChange={this.changeHanderName}
              />
            </div>
            <div class="form-group">
              <label for="email"> Enter Email address:</label>
              <input
                type="email"
                className="form-control"
                value={this.state.email}
                id="phone"
                onChange={this.changeHanderEmail}
              />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="phone"
                value={this.state.password}
                onChange={this.changeHanderPassword}
              />
            </div>

            <div class="checkbox" className="Rememberme">
              <label>
                <input type="checkbox" />
                Subscribe mail
              </label>
            </div>
            <div>
              <span style={{ color: "red" }}>{this.state.error}</span>
            </div>
            <Link className="btn1" onClick={this.handleSubmit}>
              Sign up
            </Link>

            <hr></hr>
            <div>
              <h5>
                Already have an account ? <Link to="/signin">Sign in</Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;
