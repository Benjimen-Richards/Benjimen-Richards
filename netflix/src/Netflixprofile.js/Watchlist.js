import axios from "axios";
import './Css/Watchlist.css'
import { Link, Redirect } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
const carturl = 'http://localhost:1234/cart'
const Watchlist = () => {
    const [watchlist, setwatchlist] = useState('')
    const [update, setupdate] = useState('')
    useEffect(async () => {
        await axios.get(carturl).then(res => setwatchlist(res.data))
        window.scrollTo(0, 0);
    }, [update])
    const deletehandler = (e) => {
        axios.delete(`${carturl}/${e.target.value}`).then(res => setupdate(res.data))
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
                            <button key={idx} value={idx + 1} className='btn btn-success' onClick={deletehandler}>delete</button>
                        </div>
                    )
                })
            )
        }
    }
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
}
export default Watchlist
