import { Link } from 'react-router-dom'
import './Css/Headernav.css'
const Headernav = () => {
    return (
        <div className='Headercontainer'>
            <div className='headerbkgd'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9a818ce7-5b19-4a0a-8bec-e4a233c8661b/8a09c2e9-b912-4286-8836-706712bdad61/IN-en-20210104-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/' />
            </div>
            <div className='nav'>
                <div className='navimg'>
                    <Link to='/'><img style={{
                        width: '300px', height: '200px'
                    }} src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='/'></img></Link>
                </div>
                <div className='navbutton'>
                    <Link to='/signin'><button type="button" class="btn btn-danger">Sign in</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Headernav