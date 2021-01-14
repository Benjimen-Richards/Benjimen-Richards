import { Link } from 'react-router-dom'
import { Component } from "react"
import './Css/Profile.css'
class Profilenav extends Component {
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
            <div className='profile_container'>
                <div className='background_img'>
                    <img src='https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' alt='joker' />
                </div>
                <div className='Profile_nav'>
                    <div className='nav_left'>
                        <Link to='/'><img style={{
                            width: '300px', height: '200px'
                        }} src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='/'></img></Link>
                        <select className='nav_select'>
                            <option value="none" selected disabled hidden>Series</option>
                            <option value="none">xyz</option>
                            <option value="none">xyz</option>
                            <option value="none">xyz</option>
                        </select>
                        <select className='nav_select'>
                            <option selected disabled hidden>Flims</option>
                        </select>
                    </div>
                    <div className='nav_right'>
                        <h1>Search</h1>
                        <img src={this.state.image} alt='/' />
                    </div>
                </div>

            </div >

        )
    }
    componentDidMount() {
        this.setState({
            name: sessionStorage.getItem('profile_name'),
            image: sessionStorage.getItem('profile_image')
        })

    }
}
export default Profilenav