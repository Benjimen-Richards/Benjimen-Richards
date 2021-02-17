import Axios from 'axios';
import React from 'react';
const editurl = 'http://localhost:1234/hotel/edit'
const userurl = 'http://localhost:1234/hotel/users'
class editpage extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        role: '',
        id: ''

    }
    handlerchange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (id) => {
        Axios.put(`${editurl}/${id}`, this.state).then(res => this.props.history.push('/users'))
    }
    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4>Edituser</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Name</label>
                            <input type="text" name="name" value={this.state.name} className="form-control"
                                onChange={this.handlerchange} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label className="control-label">Email</label>
                            <input type="text" name="email" value={this.state.email} className="form-control"
                                onChange={this.handlerchange} />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Password</label>
                            <input type="text" name="password" value={this.state.password} className="form-control"
                                onChange={this.handlerchange} />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Role</label>
                            <input type="text" name="password" value={this.state.role} className="form-control"
                                onChange={this.handlerchange} />
                        </div>
                        <br />
                        <button className="btn btn-success" onClick={() => this.handleSubmit(this.state.id)}>Register</button>
                    </div>
                </div>

            </div>
        )
    }
    componentDidMount() {
        const userid = this.props.match.params.id
        Axios.get(`${userurl}/${userid}`).then(res => this.setState({
            name: res.data.name,
            email: res.data.email,
            password: res.data.password,
            role: res.data.role,
            id: res.data._id
        }))
    }
}
export default editpage