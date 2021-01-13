import { BrowserRouter, Route } from "react-router-dom"
import Mainpage from "./Intropage/Mainpage"
import Signin from "./logincomponents/Signin"
import Profile from "./Netflixprofile.js/Proflie"
import Whoswatching from "./Whoiswatching/Whoswatching"

const Mainrouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' exact component={Mainpage} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/watching' component={Whoswatching} />
                <Route path='/profile' component={Profile} />
            </BrowserRouter>
        </div>
    )
}
export default Mainrouter