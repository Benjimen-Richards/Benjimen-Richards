import { BrowserRouter, Route } from "react-router-dom"
import Addjson from "./Addmovies"
import Mainpage from "./Intropage/Mainpage"
import Signin from "./logincomponents/Signin"
import Mainprofile from "./Netflixprofile.js/Mainprofile"
import Whoswatching from "./Whoiswatching/Whoswatching"
const Mainrouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' exact component={Mainpage} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/watching' component={Whoswatching} />
                <Route path='/profile' component={Mainprofile} />
                <Route path='/db' component={Addjson} />
            </BrowserRouter>
        </div>
    )
}
export default Mainrouter