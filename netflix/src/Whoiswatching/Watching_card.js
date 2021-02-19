import { IoMdPersonAdd } from 'react-icons/io'
import axios from 'axios'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../Whoiswatching/Watchingcard.css'
import { watching } from '../redux/actions'

const watchingurl = 'https://login-with-jwt-richards.herokuapp.com/movies'
const watchingcard = {
    "image": "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png",
    "name": "alfred",
    "id": 1
}
class Watching_card extends Component {
    constructor() {
        super()
        this.state = {
            visible: '',
            username: '',
            error: ''
        }
    }

    Setprofile = (data) => {
        sessionStorage.setItem('profile_name', data.name)
        sessionStorage.setItem('profile_image', data.image)
        sessionStorage.setItem('movie_image', "https://i.gadgets360cdn.com/large/netflix_best_movies_may_2020_1589355119754.jpg?downsize=950:*&output-quality=80")
        sessionStorage.setItem('movie_id', data.id)
        console.log(data, 'clicked')
        this.props.history.push('/profile')
    }
    renderwatching = (data) => {
        if (data) {
            // console.log(data)
            return data.map((item, idx) =>
            (<div style={{ textDecoration: 'none' }} key={item.id} value={item.id} name={item.name} onClick={() => this.Setprofile(item)} >
                <div className='Card_container'  >
                    <img src={item.image} alt='/' />
                    <h4><b><i>{item.name}</i></b></h4>
                </div>
            </div>))

        }
    }
    adduser = () => {
        this.setState({ visible: 'visible' })
    }
    changehandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    postuser = () => {
        const userdata = {
            image: 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png',
            name: this.state.username
        }
        this.setState({ username: '' })
        this.setState({ visible: '' })
        if (this.props.watching.length < 4) {
            axios.post(watchingurl, userdata)
        }
        else {
            this.setState({ error: 'users exceeded' })
        }

        this.props.dispatch(watching())
        this.props.history.push('/watching')
    }
    render() {
        console.log(this.state.images)
        if (sessionStorage.getItem('logintoken') === null) {
            this.props.history.push('/signin')
        }
        // console.log('state', this.props.watching)
        return (
            <div>
                <h1 style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    height: '20vh',
                    alignItems: 'center'
                }}>Whos watching?</h1>
                <div className='whoswatching_container'>
                    {this.renderwatching(this.props.watching)}
                    <button onClick={this.adduser}><IoMdPersonAdd /></button>
                </div>
                {
                    this.state.visible && <div className='user_profile'>
                        <input placeholder='Add user' autocomplete="off" style={{
                            visibility: this.state.visible
                        }} name='username' value={this.state.username} onChange={this.changehandler} />
                        <button onClick={this.postuser} >Set user</button>
                    </div>
                }
                <div className='error'>
                    <h1><i>{this.state.error}</i></h1>
                </div>
            </div>

        )
    }
    componentDidMount() {
        this.props.dispatch(watching())
    }

}
const mapstatetoprops = (state) => {
    // console.log('state', state)
    return {
        watching: state.moviesreducer.data
    }

}

export default connect(mapstatetoprops)(Watching_card) 