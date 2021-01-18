import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Userprofile.css'
class Userprofile extends Component {
    constructor() {
        super()
        this.state =
        {

        }
    }
    render() {
        return (
            <div>
                <div className='userprofile_logo'>
                    <Link to='/profile' ><img className='link_logo' src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='/'></img></Link>
                </div>
                <div className='userprofile_container'>

                    <div className='profile_image'>
                        <img src={sessionStorage.getItem('profile_image')} alt='/' />
                    </div>
                    <div className='form'>
                        <label>Name</label>
                        <input placeholder={sessionStorage.getItem('profile_name')} />
                        <label>Dob</label>
                        <input placeholder={sessionStorage.getItem('dob')} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Userprofile