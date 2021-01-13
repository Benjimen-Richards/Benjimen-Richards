
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Css/Signin.css'
// const Signin = () => {
//     return (
//         <div className='signincontainer'>
//             <div className='home'>
//                 <Link to='/'><img style={{
//                     width: '300px', height: '200px'
//                 }} src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='/'></img></Link>
//             </div>
//             <div className='form1'>

//             </div>
//             <div className='form2'>
//                 <form action="/action_page.php">
//                     <div>
//                         <h2>Sign in</h2>
//                     </div>
//                     <div class="form-group">
//                         <label for="email">Email address:</label>
//                         <input type="email" class="form-control" id="email" />
//                     </div>
//                     <div class="form-group">
//                         <label for="pwd">Password:</label>
//                         <input type="password" class="form-control" id="pwd" />
//                     </div>
//                     <div class="checkbox">
//                         <label><input type="checkbox" /> Remember me</label>
//                     </div>
//                     <button type="submit" class="btn btn-default">Submit</button>
//                     <div>
//                         <h4>New to Netflix? Sign up now.
// This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</h4>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default Signin   


const Signin = () => {
    return (
        <div className='sigincontainer'>
            <div className='signinbackgrd'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9a818ce7-5b19-4a0a-8bec-e4a233c8661b/8a09c2e9-b912-4286-8836-706712bdad61/IN-en-20210104-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/' />
            </div>
            <div className='signinlogo'>
                <Link to='/'><img style={{
                    width: '300px', height: '200px'
                }} src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='/'></img></Link>
            </div>
            <div className='form1'>
                <h1></h1>
            </div>
            <div className='form2'>
                <form action="/action_page.php">
                    <div>
                        <h2>Sign in</h2>
                    </div>
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email" />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" />
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" /> Remember me</label>
                    </div>
                    <div className='a'>
                        <button id='sigin_button' type="submit" class="btn btn-default">Submit</button>
                    </div>
                    <div>
                        <h4>New to Netflix? Sign up now.
This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</h4>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signin