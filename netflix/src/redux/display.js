import { IoMdPersonAdd } from 'react-icons/io'
import axios from 'axios'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../Whoiswatching/Watchingcard.css'
import { watching } from './actions'
const watchingurl = 'http://localhost:1234/watching'
class Display extends Component {
    constructor() {
        super()
        this.state = {
            images: '',
            visible: '',
            username: '',
            error: ''
        }
    }

    Setprofile = (e) => {
        sessionStorage.setItem('profile_name', e.target.name)
        sessionStorage.setItem('profile_image', e.target.value)
        console.log(e.target.value, e.target.name, 'clicked')
    }
    renderwatching = (data) => {
        if (data) {
            // console.log(data)
            return data.map((item, idx) =>
            (
                <Link to='/profile' style={{ textDecoration: 'none' }} value={item.img} name={item.name} onClick={this.Setprofile} >
                    <div className='Card_container'  >
                        <div className='card_img'>
                            <img src={item.image} alt='/' />
                        </div>
                        <div className='card_name'  >
                            <h4>{item.name}</h4>
                        </div>
                    </div>
                </Link>

            ))
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
        // console.log(userdata)
        if (this.state.images.length < 4) {
            axios.post(watchingurl, userdata)
            this.props.history.push('/watching')
            axios.get(watchingurl).then(res => this.setState({ images: res.data }))
            // console.log(this.props)
        }
        else {
            this.setState({ error: 'users exceeded' })
        }

    }
    render() {
        // console.log(this.state.images)
        // if (sessionStorage.getItem('logintoken') === null) {
        //     this.props.history.push('/signin')
        // }
        console.log('state', this.props.watching)

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
    return {
        watching: state.moviesreducer.data
    }

}

export default connect(mapstatetoprops)(Display) 