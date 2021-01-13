import { Component } from "react";
import Profilenav from './Nav'
import Profilebody from "./Profilebody";
import './Css/Mainprofile.css'
class Mainprofile extends Component {
    render() {
        return (
            <div className='Mainprofile_container'>
                <Profilenav />
                <Profilebody />
            </div>
        )
    }
}
export default Mainprofile