import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Css/Faq.css'

class Faq extends Component {
    constructor() {
        super()
        this.state = {
            inputvalue: ''
        }
    }
    registerhandler = () => {
        sessionStorage.setItem('register_email', this.state.inputvalue)
        this.props.history.push('/register')
        // console.log(this.state.inputvalue)
    }
    inputhandler = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        // console.log('props', this.props)
        return (
            < div className='Faqcontainer' >
                <div className='Faq_text'>
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className='Faqoptions'>
                    <div class="dropdown">
                        <select>
                            <option>What is Netflix?</option>
                        </select>
                        <div class="dropdown-content">
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <select>
                            <option>How much does it Netflix cost?</option>
                        </select>
                        <div class="dropdown-content">
                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <select>
                            <option>Where can i watch?</option>
                        </select>
                        <div class="dropdown-content">
                            <p>Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <select>
                            <option>How do i cancel?</option>
                        </select>
                        <div class="dropdown-content">
                            <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <select>
                            <option>What can i watch on Netflix?</option>
                        </select>
                        <div class="dropdown-content">
                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </div>
                    </div>
                </div>
                <div className='searchboxcontainer' >
                    <div className='faqready'>
                        <h6>Ready to watch?Enter ur email to create or restart your memebership</h6>
                    </div>

                    <div className='faqbodysearch'>
                        <input placeholder='Email address' name='inputvalue' value={this.state.inputvalue} onChange={this.inputhandler} />
                        <Link to='/register' style={{ textDecoration: "none" }}>
                            <button className='register_button' onClick={this.registerhandler}>Get started</button>
                        </Link>
                    </div>

                </div>

            </div >

        )
    }
}
export default withRouter(Faq)