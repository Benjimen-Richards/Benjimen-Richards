import {Component} from 'react'
 import axios from 'axios'
import { Link } from 'react-router-dom'
 const loginurl ='http://localhost:1111/google/auth/google'
 
class Loginpage extends Component{
    constructor()
    {
        super()
        this.state={
            profile:''
        }
    }
    buttonhandler=()=>
    {
        window.location.href=loginurl
    }
    render()
    {
        return(
            <div>
                <button onClick={this.buttonhandler}>Login with google</button>
            </div>
        )
    }

}
export default Loginpage