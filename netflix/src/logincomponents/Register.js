
import axios from 'axios'
import { Component } from 'react'
import { Link } from 'react-router-dom'
const registerurl = 'http://localhost:5000/api/auth/register'
// import './Css/Signin.css'
class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            dob: '',
            password: '',
            nameerror: '',
            emailerror: '',
            doberror: ''
        }
    }
    changehandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submithandler = () => {
        console.log(this.state)
        axios.post(registerurl, this.state)
        this.setState(
            {
                name: '',
                email: '',
                dob: '',
                password: '',
                nameerror: '',
                emailerror: '',
                doberror: ''

            }
        )
        this.props.history.push('/signin')
    }
    render() {
        return (
            <div className='sigincontainer' >
                <div className='signinbackgrd'>
                    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9a818ce7-5b19-4a0a-8bec-e4a233c8661b/8a09c2e9-b912-4286-8836-706712bdad61/IN-en-20210104-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/' />
                </div>
                <div className='signinlogo'>
                    <Link to='/'><img style={{
                        width: '300px', height: '200px'
                    }} src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='/'></img></Link>
                </div>
                <div className='form1'></div>
                <div className='form2'>
                    <form action="/action_page.php">
                        <div>
                            <h2>Register</h2>
                        </div>
                        <div class="form-group">
                            <label for="email">Name</label>
                            <input type="text" class="form-control" value={this.state.name} name='name' onChange={this.changehandler} />
                        </div>
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control" value={this.state.email} name='email' onChange={this.changehandler} />
                        </div>
                        <div class="form-group">
                            <label for="email">Date of birth</label>
                            <input type="date" class="form-control" value={this.state.dob} name='dob' onChange={this.changehandler} />
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" value={this.state.password} name='password' onChange={this.changehandler} />
                        </div>
                        <div className='a'>
                            <button id='sigin_button' type="button" class="btn btn-default" onClick={this.submithandler}>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
    componentDidMount() {
        if (sessionStorage.getItem('register_email')) {
            this.setState({ email: sessionStorage.getItem('register_email') })
        }
    }
}
export default Register