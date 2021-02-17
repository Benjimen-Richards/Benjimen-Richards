import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const url = "http://localhost:1234/hotel/users";

class Profile extends Component {
    constructor() {
        super()

        this.state = {
            user: '',
            error: ''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('logintoken');
        sessionStorage.removeItem('roletoken');
        sessionStorage.removeItem('loginerr');
        this.props.history.push('/login')
    }
    adminhandler = (role) => {
        if (role === "Admin") {
            return <button style={{ borderRadius: "10px", }} className="btn btn-danger" > <Link style={{
                color: "white"
            }} class="nav-link" to="/users">
                Admin Page
</Link></button >
        }
    }
    render() {
        console.log("this.state.user", sessionStorage.getItem('logintoken'))
        if (this.state.user == null) {
            this.props.history.push('/login')
        }
        sessionStorage.setItem('roletoken', this.state.user.role)
        return (

            <div className="container">

                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h2>{this.state.error}</h2>
                    </div>
                    <div className="panel-body">
                        <h1>Hi {this.state.user.name}</h1>
                        <h2>Your Email Id is {this.state.user.email}</h2>
                        <h2>Your Role is {this.state.user.role}</h2>
                    </div>
                    <button className="btn btn-danger"
                        onClick={this.handleLogout}>
                        Logout
                    </button>
                    <br />
                    <br />
                    {this.adminhandler(this.state.user.role)}
                </div>
            </div>
        )
    }
    componentDidMount() {
        const id = sessionStorage.getItem("logintoken")
        Axios.get(`${url}/${id}`).then(res => this.setState({ user: res.data }))
    }
}


export default Profile