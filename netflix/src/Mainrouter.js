import { BrowserRouter, Route } from "react-router-dom"
import Mainpage from "./Intropage/Mainpage"
import Signin from "./logincomponents/Signin"

const Mainrouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' exact component={Mainpage} />
                <Route path='/signin' exact component={Signin} />
            </BrowserRouter>
        </div>
    )
}
export default Mainrouter