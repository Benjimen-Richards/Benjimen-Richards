import { BrowserRouter, Route } from "react-router-dom"
import Mainpage from "./Intropage/Mainpage"
import Signin from "./logincomponents/Signin"
import Whoswatching from "./Whoiswatching/Whoswatching"

const Mainrouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' exact component={Mainpage} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/watching' component={Whoswatching} />
            </BrowserRouter>
        </div>
    )
}
export default Mainrouter