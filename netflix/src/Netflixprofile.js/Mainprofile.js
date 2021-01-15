import { Component } from "react";
import Profilenav from './Nav'
import Profilebody from "./Profilebody";
import './Css/Mainprofile.css'
const url = "http://localhost:5000/api/auth/userinfo";
class Mainprofile extends Component {
    render() {
        if (sessionStorage.getItem('logintoken') == null) {
            this.props.history.push('/signin')
        }
        return (
            <div className='Mainprofile_container'>
                <Profilenav />
                <Profilebody />
            </div>
        )
    }
    componentDidMount() {
        fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': sessionStorage.getItem('logintoken')
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('success')
            })
    }
}
export default Mainprofile