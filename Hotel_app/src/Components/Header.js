import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import './header.css'
class Header extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }
  logout = () => {
    this.setState({ username: '' })
    sessionStorage.setItem('logintoken', '')
    sessionStorage.setItem('username', '')
    Redirect('/')
  }
  renderusername = (data) => {
    if (data) {
      return (
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <li>
            <button style={{ backgroundColor: "transparent", border: "none", outline: "none", fontSize: "large" }}>Welcome!{sessionStorage.getItem("username")}</button>
          </li>
          <li><Link to="/viewbooking">
            Booking
              </Link></li>
        </div>
      )
    }
  }
  renderlogin = (data) => {
    if (data) {
      return (
        <li onClick={this.logout}>
          <button style={{ backgroundColor: "transparent", border: "none", outline: "none" }}>Logout</button>
        </li>
      )
    }
    else {
      return (
        <li>
          <Link to="/Login">
            Login
          </Link>
        </li>
      )
    }
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ paddingLeft: '10px', paddingRight: '10px' }} >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Triping.com
        </Link>

          <div id="navbar_right">
            <ul>
              {this.renderusername(sessionStorage.getItem("username"))}

              <li>
                <Link to="/register">
                  Register
              </Link></li>
              {this.renderlogin(sessionStorage.getItem("username"))}
            </ul>
          </div>
        </div>
      </nav >
    )
  }

};
export default Header;
