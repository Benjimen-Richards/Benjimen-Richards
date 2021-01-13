import { Component } from "react"

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }
    logouthandler = () => {
        sessionStorage.removeItem('profile_name')
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>{this.state.name} is Watching Netflix</h1>
                <button onClick={this.logouthandler}>Logout</button>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            name: sessionStorage.getItem('profile_name')
        })

    }
}
export default Profile