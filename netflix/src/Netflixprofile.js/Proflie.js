import { Component } from "react"

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            image: ''
        }
    }
    logouthandler = () => {
        sessionStorage.removeItem('profile_name')
        sessionStorage.removeItem('profile_image')
        this.props.history.push('/')
    }
    render() {
        console.log('state', this.state)
        return (
            <div>
                <h1>{this.state.name} is Watching Netflix</h1>
                <img style={{
                    width: '500px', height: '500px'
                }} src={this.state.image} alt='/' />
                <button onClick={this.logouthandler}>Logout</button>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            name: sessionStorage.getItem('profile_name'),
            image: sessionStorage.getItem('profile_image')
        })

    }
}
export default Profile