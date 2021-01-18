
import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Css/Signin.css'
const burl = " http://localhost:5000/api/auth/login";
class Signin extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            nameerror: '',
            emailerror: '',
            registererror: ''
        }
    }
    changehandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submithandler = () => {
        // console.log(this.state)
        fetch(burl, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((res) => res.json())
            .then((data) => {
                sessionStorage.setItem('logintoken', data.token);
                this.props.history.push('/watching')
            })
            .catch((err) => {
                this.setState({ registererror: "Invalid UserName or Password" })
            })
        this.setState(
            {

                email: '',
                password: '',
                nameerror: '',
                emailerror: '',


            }
        )
    }
    render() {
        return (
            <div className='sigincontainer' >
                <div className='signinbackgrd'>
                    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9a818ce7-5b19-4a0a-8bec-e4a233c8661b/8a09c2e9-b912-4286-8836-706712bdad61/IN-en-20210104-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/' />
                </div>
                <div className='signinlogo'>
                    <Link to='/'><img style={{
                        width: '200px', height: '250px'
                    }} src='https://cdn.iconscout.com/icon/free/png-256/netflix-282224.png' alt='/'></img></Link>
                </div>

                <div className='form2'>
                    <form action="/action_page.php">
                        <div>
                            <h2>Sign in</h2>
                            <h1>{this.state.registererror}</h1>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="text" name='email' value={this.state.email}
                                onChange={this.changehandler} class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd" name='password' value={this.state.password} onChange={this.changehandler} />
                        </div>
                        <div className='a'>
                            <button id='sigin_button' type="button" class="btn btn-default" onClick={this.submithandler}>Submit</button>
                        </div>
                        <div classname='signin_text' style={{ height: '20vh', display: 'flex', alignItems: 'center', wordSpacing: '5px', flexWrap: 'wrap', width: '100%', color: '#8c8c8c' }}>
                            <h4>New to Netflix? <Link to='/register'
                                className='registerbutton' ><b>Sign up now.</b></Link>
                                <br />
                                <br />
                                <span style={{ fontSize: '18px' }}>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</span></h4>
                        </div>
                    </form>

                </div>
                <div className='footer'>
                    <div className='Questions'>
                        <h4>Questions? Call 000-800-040-4843</h4>
                    </div>
                    <div className='Footerlinks'>
                        <div className='block'>
                            <a href='/'>FAQ</a>
                            <a href='/'>Cookie Preferences</a>

                        </div>
                        <div className='block'>
                            <a href='/'>Help Centre</a>

                            <a href='/'>Cookie Preferences</a>

                        </div>
                        <div className='block'>
                            <a href='/'>Terms of Use</a>

                        </div>
                        <div className='block'>
                            <a href='/'>Privacy</a>
                        </div>
                    </div>
                    <div className='selectlang'>
                        <select>
                            <option>English</option>
                            <option>हिंदी</option>
                        </select>
                    </div>
                </div>

            </div>
        )
    }
    componentDidMount() {
        window.scrollTo({ top: 0 })
    }
}
export default Signin