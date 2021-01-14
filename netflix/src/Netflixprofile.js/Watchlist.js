import axios from "axios";
import { Component } from "react";
import './Css/Watchlist.css'
import { Link } from 'react-router-dom'
const carturl = 'http://localhost:1234/cart'
class Watchlist extends Component {
    constructor() {
        super()
        this.state = {
            watchlist: ''
        }
    }
    deletehandler = (e) => {
        const value = e.target.value
        console.log(value)
        axios.delete(`${carturl}/${e.target.value}`, {
            headers: {
                "Authorization": "authorizationToken"
            }
        })
        this.props.history.push('/watchlist')
        // console.log('data', this.state.watchlist)
        // axios.get(carturl).then(res => this.setState({ watchlist: res.data }))

    }
    renderwatchlist = (data) => {
        if (data) {

            return (
                data.map((item, idx) => {
                    // const length = data.length
                    return (
                        <div className='watchlist_flim'>
                            <div className='image'>
                                <img src={item[0].imageurl} alt='netflix image' />
                            </div>
                            <div className='text'>
                                <button value={idx + 1} class="btn btn-success" onClick={this.deletehandler}>delete</button>

                            </div>
                        </div>
                    )

                }
                )
            )
        }
    }
    render() {
        return (
            <div>
                <div className='watchlist_logo'>
                    <Link to='/profile'><img style={{
                        width: '300px', height: '200px'
                    }} src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='/'></img></Link>
                </div>
                <div className='watchlist_container'>
                    <div className='watchlist_display'>
                        {this.renderwatchlist(this.state.watchlist)}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get(carturl).then(res => this.setState({ watchlist: res.data }))
    }
    componentDidUpdate() {
        axios.get(carturl).then(res => this.setState({ watchlist: res.data }))
    }
}
export default Watchlist