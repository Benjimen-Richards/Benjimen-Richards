
import { Link } from 'react-router-dom'
import './Css/Signin.css'
const Signin = () => {
    return (
        <div className='signincontainer'>
            <div className='home'>
                <Link to='/'><img style={{
                    width: '300px', height: '200px'
                }} src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='/'></img></Link>
            </div>
            <div className='form1'>

            </div>
            <div className='form2'>
                <form action="/action_page.php">
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
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Signin   