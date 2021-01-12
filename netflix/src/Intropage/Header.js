import './Css/Header.css'
import Headernav from './HeaderNav'
const Header = () => {
    return (
        <div className='Headercontainer'>
            <Headernav />
            <div className='headerbody'>
                <div className='bodywelcome'>
                    <h1>Unlimited movies, TV shows and more.</h1>
                </div>
                <div className='bodywatch'>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                </div>
                <div className='bodyready'>
                    <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                </div>
                <div className='Headerbodysearch'>
                    <input placeholder='Email address' />
                    <button>Get started</button>
                </div>
            </div>
        </div>
    )
}
export default Header