import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Css/Header.css'
import Headernav from './HeaderNav'
class Header extends Component {
    constructor() {
        super()
        this.state = {
            inputvalue: ''
        }
    }
    inputhandler = (e) => {
        console.log(e.target.name, e.target.inputvalue)
        this.setState({ [e.target.name]: e.target.inputvalue })
    }
    render() {
        return (
            <div className='Headercontainer'>
                <Headernav />
                <div className='headerbody'>
                    <div className='bodywelcome'>
                        <h1>Unlimited movies, TV shows and more.</h1>
                    </div>
                    <div className='bodywatch'>
                        <h4>Watch anywhere. Cancel anytime.</h4>
                    </div>
                    <div className='bodyready'>
                        <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                    </div>
                    <div className='Headerbodysearch'>
                        <input placeholder='Email address' type='text' name='inputvalue' value={this.state.inputvalue} onClick={this.inputhandler} />
                        <Link to='/register' style={{ textDecoration: "none" }}>
                            <button className='register_button' >Get started</button>
                        </Link>
                    </div>
                </div>
            </div >
        )
    }
}
export default Header