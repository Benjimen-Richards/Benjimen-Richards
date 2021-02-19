import './Moviepage.css'
import axios from 'axios'
import { Component } from 'react'
const carturl = 'http://localhost:1234/cart'
const url = 'http://localhost:1234/movies'

class Moviepage extends Component {
    constructor() {
        super()
        this.state = {
            movies: ''
        }
    }
    idhandler = (e) => {
        // const value = e.target.id
        // console.log(value)
        // const cartimage = this.state.movies.filter(item =>
        // (
        //     parseInt(item.id) === parseInt(value)
        // ))
        // console.log(cartimage)
        // axios.post(carturl, cartimage)
        this.props.history.push('/profile')
    }
    render() {
        console.log(this.props)
        return (
            <div className='moviepage_container' >
                <div className='movie_name'>
                    <h1>{sessionStorage.getItem('movie_name')}</h1>
                    <button onClick={this.idhandler} id={sessionStorage.getItem('movie_id')} className="register_button">Add to list</button>
                </div>
                <div className='movie_image'>
                    <img src={sessionStorage.getItem('movie_image')} alt='movie image' />
                </div>

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
export default Moviepage