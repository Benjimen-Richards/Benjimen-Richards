import axios from "axios";
import './Css/Watchlist.css'
import { Link } from 'react-router-dom'
import { Component } from "react";
import { connect } from 'react-redux'
import { watchlist_cart } from "../redux/actions/index";
const carturl = 'http://localhost:1234/cart'
class Display extends Component {
    constructor() {
        super()
        this.state = {
            watchlist: ''
        }
    }
    deletehandler = async (e) => {
        console.log(e.target.value)
        await axios.delete(`${carturl}/${e.target.value}`).then(res => (res.data))
        this.props.dispatch(watchlist_cart())
        this.props.history.push('/watchlist')
    }

    renderwatchlist = (data) => {
        if (data) {
            return (
                data.map((item, idx) => {
                    return (
                        <div className='image'>
                            <img src={item[0].imageurl} style={{
                                maxWidth: '300px', height: '350px', border: 'none'
                            }} alt='netflix watchlist' />
                            <button key={item[0].id} value={idx + 1} className='btn btn-success' onClick={this.deletehandler}>delete</button>
                        </div>
                    )
                })
            )
        }
    }
    render() {
        // console.log('state', this.props)
        return (
            <div>
                <div className='watchlist_logo'>
                    <Link to='/profile'><img style={{
                        width: '300px', height: '200px'
                    }} src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='/'></img></Link>
                </div>
                <div className='watchlist_container'>
                    <div className='watchlist_display'>
                        {this.renderwatchlist(this.props.watchlist)}
                    </div>
                </div>
            </div >
        )
    }
    componentDidMount() {
        this.props.dispatch(watchlist_cart())
    }
}
const mapstatetoprops = (state) => {
    return {
        watchlist: state.watchlist_reducer.data
    }
}

export default connect(mapstatetoprops)(Display)
