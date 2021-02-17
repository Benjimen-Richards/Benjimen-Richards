import Axios from 'axios';
import React from 'react';
const burl = 'http://localhost:1234/hotel/register'
class Adduser extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        role: ''
    }
    handlerchange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        Axios.post(burl, this.state)
            .then(this.props.history.push('/users'))

    }
    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4>Register Component</h4>
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
                            <input type="password" name="password" value={this.state.password} className="form-control"
                                onChange={this.handlerchange} />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Role</label>
                            <input type="text" name="role" value={this.state.role} className="form-control"
                                onChange={this.handlerchange} />
                        </div>
                        <br />
                        <button className="btn btn-success" onClick={this.handleSubmit}>Register</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default Adduser