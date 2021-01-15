import axios from "axios";

import './Css/Watchlist.css'
import { Link, withRouter } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
const carturl = 'http://localhost:1234/cart'
const Watchlist = withRouter(props => {
    const [watchlist, setwatchlist] = useState('')
    const [update, setupdate] = useState('')
    useEffect(async () => {
        await axios.get(carturl).then(res => setwatchlist(res.data))
    }, [update])
    // console.log('set', watchlist)
    const deletehandler = (e) => {
        // console.log(`${carturl}/${e.target.value}`)
        axios.delete(`${carturl}/${e.target.value}`).then(res => console.log(res.data))
        this.props.his
    }
    const renderwatchlist = (data) => {
        if (data) {
            return (
                data.map((item, idx) => {
                    return (
                        <div className='image'>
                            <img src={item[0].imageurl} style={{
                                width: '100%', height: '350px', border: 'none'
                            }} alt='netflix watchlist' />
                            <button value={idx + 1} className='btn btn-success' onClick={deletehandler}>delete</button>
                        </div>
                    )
                })
            )
        }
    }
    console.log('props', props)
    return (
        <div>
            <div className='watchlist_logo'>
                <Link to='/profile'><img style={{
                    width: '300px', height: '200px'
                }} src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='/'></img></Link>
            </div>
            <div className='watchlist_container'>
                <div className='watchlist_display'>
                    {renderwatchlist(watchlist)}
                </div>
            </div>
        </div >
    )
})
export default Watchlist
