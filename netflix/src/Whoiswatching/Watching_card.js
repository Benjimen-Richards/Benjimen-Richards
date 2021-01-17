import { IoMdPersonAdd } from 'react-icons/io'
import axios from 'axios'
import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Watchingcard.css'
const watchingurl = 'http://localhost:1234/watching'
class Watchingcard extends Component {
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
        sessionStorage.setItem('movie_image', 'https://www.thenewsminute.com/sites/default/files/styles/slideshow_image_size/public/Cuties_Netflix_1200.jpg?itok=GZSv5CHx')
        console.log(e.target.value, 'clicked')
    }
    renderwatching = (data) => {
        if (data) {
            return data.map((item, idx) =>
            (
                <Link to='/profile' style={{ textDecoration: 'none' }} name={item.name} value={item.image} onClick={this.setsession} >
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
        this.setState({ visible: '' })
        // console.log(userdata)
        if (this.state.images.length < 4) {
            axios.post(watchingurl, userdata)
            axios.get(watchingurl).then(res => this.setState({ images: res.data }))
            this.props.history.push('/watching')
            // console.log(this.props)
        }
        else {
            this.setState({ error: 'users exceeded' })
        }

    }
    render() {
        console.log(this.state.images)
        // if (sessionStorage.getItem('logintoken') === null) {
        //     this.props.history.push('/signin')
        // }
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
                    {this.renderwatching(this.state.images)}
                    <button onClick={this.adduser}><IoMdPersonAdd /></button>
                </div>
                {
                    this.state.visible && <div className='user_profile'>
                        <input placeholder='Add user' style={{
                            visibility: this.state.visible
                        }} name='username' valu={this.state.username} onChange={this.changehandler} />
                        <button onClick={this.postuser} > Set user</button>
                    </div>
                }
                <div className='error'>
                    <h1><i>{this.state.error}</i></h1>
                </div>
            </div>

        )
    }
    componentDidMount() {
        axios.get(watchingurl).then(res => this.setState({ images: res.data }))
    }
}
export default withRouter(Watchingcard)