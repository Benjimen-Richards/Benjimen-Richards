import Axios from 'axios';
import React, { Component } from 'react';
import './login.css'

class LoginComponent extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            loginerr: ''
        }
    }
    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    handleSubmit = () => {
        Axios.post("http://localhost:1234/hotel/login", this.state).then(res => {
            if (res.data) {
                console.log(res.data)
                sessionStorage.setItem('logintoken', res.data._id)
                sessionStorage.setItem('username', res.data.name)
                this.props.history.push('/')
            }
            else {
                this.setState({ loginerr: "No user found" })
            }

        })
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h4>Login Component</h4>
                    </div>
                    <br />
                    <h2>{this.state.loginerr}</h2>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Email</label>
                            <input type="text" name="order_id" value={this.state.email} className="form-control"
                                onChange={this.handleChangeEmail} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label className="control-label">Password</label>
                            <input type="text" name="order_id" value={this.state.password} className="form-control"
                                onChange={this.handleChangePassword} />
                        </div>
                        <br />
                        <button className="btn btn-success" onClick={this.handleSubmit}>Login</button>
                    </div>
                </div>

            </div>
        )
    }
    componentDidMount() {
        this.setState({ loginerr: sessionStorage.getItem("loginerr") })
    }
}

export default LoginComponent;