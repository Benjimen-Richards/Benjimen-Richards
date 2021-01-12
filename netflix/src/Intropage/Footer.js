import './Css/Footer.css'

const Footer = () => {
    return (
        <div className='Footercontainer'>
            <div className='Questions'>
                <h4>Questions? Call 000-800-040-4843</h4>
            </div>
            <div className='Footerlinks'>
                <div className='block'>
                    <a href='/'>FAQ</a>
                    <a href='/'>Investor Relations</a>
                    <a href='/'>Privacy</a>
                    <a href='/'>Speed Test</a>
                </div>
                <div className='block'>
                    <a href='/'>Help Centre</a>
                    <a href='/'>Jobs</a>
                    <a href='/'>Cookie Preferences</a>
                    <a href='/'>Legal Notices</a>
                </div>
                <div className='block'>
                    <a href='/'>Account</a>
                    <a href='/'>Ways to Watch</a>
                    <a href='/'>Corporate Information</a>
                    <a href='/'>Netflix Originals</a>
                </div>
                <div className='block'>
                    <a href='/'>Media Centre</a>
                    <a href='/'>Terms of Use</a>
                    <a href='/'>Contact Us</a>
                </div>
            </div>
            <div className='selectlang'>
                <select>
                    <option>English</option>
                    <option>हिंदी</option>
                </select>
            </div>
            <div className='bottom'>
                <h5>Netflix India</h5>
            </div>
        </div>
    )
}
export default Footer