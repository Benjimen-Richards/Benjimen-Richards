import Axios from 'axios';
import React, { Component } from 'react';
import UserDisplay from './Userdisplay'

const url = "http://localhost:1234/hotel/users";
const deleteurl = "http://localhost:1234/hotel/delete";


class UserList extends Component {
    constructor() {
        super()

        this.state = {
            users: ''
        }
    }
    edituser = (id) => {
        this.props.history.push(`/editpage/${id}`)
    }
    deleteuser = (id) => {
        console.log(id)
        Axios.delete(`${deleteurl}/${id}`)
    }
    adduser = () => {
        this.props.history.push('/admin/users')
    }
    renderList = (data) => {
        if (data) {
            return data.map((item, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => this.edituser(item._id)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => this.deleteuser(item._id)}>delete</button>
                        </td>

                    </tr>
                )
            })
        }
    }
    handleLogout = () => {
        sessionStorage.removeItem('logintoken');
        sessionStorage.removeItem('roletoken');
        sessionStorage.removeItem('loginerr');
        this.props.history.push('/login')
    }

    render() {
        console.log('user', this.state.users)
        if (sessionStorage.getItem('logintoken') == null) {
            this.props.history.push('/login')
        }
        if (sessionStorage.getItem('logintoken') !== null && sessionStorage.getItem('roletoken') !== "Admin") {
            this.props.history.push('/profile?message=You Are Not Admin')
        }
        return (

            <div className="container" style={{
                width: "100%"
            }}>
                <center>
                    <h2>List Of Users</h2>
                </center>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList(this.state.users)}
                    </tbody>
                </table>
                <button className="btn btn-success" onClick={this.adduser}>
                    Add New Admin
                </button>
                <button className="btn btn-danger"
                    onClick={this.handleLogout}>
                    Logout
                    </button>
            </div>
        )
    }
    componentDidUpdate() {
        Axios.get(url).then(res => this.setState({ users: res.data }))
    }

    componentDidMount() {
        Axios.get(url).then(res => this.setState({ users: res.data }))
    }

}

export default UserList;
