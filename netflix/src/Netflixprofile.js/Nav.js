import { Link } from 'react-router-dom'
import { Component } from "react"
import './Css/Profile.css'
import axios from 'axios'
const url = 'http://localhost:1234/movies'
const carturl = 'http://localhost:1234/cart'
class Profilenav extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            visible: true,
            movies: ''
        }
    }
    logouthandler = () => {
        sessionStorage.removeItem('profile_name')
        sessionStorage.removeItem('profile_image')
        this.props.history.push('/')
    }

    visiblehandler = () => {
        this.setState({ visible: !this.state.visible })
    }
    idhandler = (e) => {
        const value = e.target.id
        console.log(value)
        const cartimage = this.state.movies.filter(item =>
        (
            parseInt(item.id) === parseInt(value)
        ))
        console.log(cartimage)
        axios.post(carturl, cartimage)

    }
    render() {
        console.log('state', this.state)
        return (
            <div className='profile_container'>
                <div className='background_img'>
                    <img src={sessionStorage.getItem('movie_image')} alt='joker' />
                </div>
                <div className='backgroundimg_text'>
                    <h1>{sessionStorage.getItem('movie_name')}</h1>
                    <button id={sessionStorage.getItem('movie_id')} onClick={this.idhandler} className=''>Add to watchlist</button>
                </div>
                <div className='Profile_nav'>
                    <div className='nav_left'>
                        <Link to='/'><img style={{
                            width: '300px', height: '200px'
                        }} src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='/'></img></Link>
                        <Link to='/series' style={{ textDecoration: 'none' }}>
                            <div className='nav_select'>
                                <h3>Series</h3>
                            </div>
                        </Link>
                        <Link to='/flims' style={{ textDecoration: 'none' }}>
                            <div className='nav_select'>
                                <h3>Flims</h3>
                            </div>
                        </Link>
                    </div>
                    <div className='nav_right'>
                        <h1>Search</h1>
                        <div className='navimage_container'>
                            <div className='navuser_image' onClick={this.visiblehandler}>
                                <img src={this.state.image} alt='/' />
                            </div>
                            {this.state.visible && <div className='navimage_list' >
                                <div className="w3-center w3-animate-top">
                                    <li>Hi {sessionStorage.getItem('profile_name')}</li>
                                    <li><Link to='/watchlist' style={{ textDecoration: "none" }}>Watchlist</Link></li>
                                    <li>logout</li>
                                </div></div>}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            name: sessionStorage.getItem('profile_name'),
            image: sessionStorage.getItem('profile_image')
        })
        axios.get(url).then(res => { this.setState({ movies: res.data }) })
    }

}
export default Profilenav