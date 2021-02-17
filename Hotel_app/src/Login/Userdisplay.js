import Axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';
const editurl = 'http://localhost:1234/hotel/edit'
const UserDisplay = (props) => {
    const edituser = (data) => {
        Redirect('/users/editpage')
    }
    const deleteuser = (data) => {
        console.log(data)
    }
    const renderList = ({ data }) => {
        if (data) {
            return data.map((item, index) => {
                return (
                    <tr>
                        <td>{index}</td>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                        <td>
                            <button onClick={() => edituser(item._id)}>Edit</button>
                        </td>
                        <td>
                            <button onClick={() => deleteuser(item._id)}>delete</button>
                        </td>
                    </tr>
                )
            })
        }
    }

    return (
        <div className="container">
            <center>
                <h2>List Of Users</h2>
            </center>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList(props)}
                </tbody>
            </table>

            <button className="btn btn-success">
                Add New Admin
            </button>
        </div>
    )
}


export default UserDisplay;