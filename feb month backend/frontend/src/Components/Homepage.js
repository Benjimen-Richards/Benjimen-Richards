import axios from 'axios'
import {Component} from 'react'
const googleurl='http://localhost:1111/google/auth/google'
const loginurl='http://localhost:1111/user/login'
class Homepage extends Component{


    googlehandler=()=>
    {
        window.location.href=googleurl
    }
    jwthandler=()=>
    {
        axios.post(loginurl,{username:"benjimen"}).then(res=>{
            if(res.data)
            {sessionStorage.setItem("token",res.data)
                this.props.history.push('/allcoupons')
            }})  
            
       
    }
    render()
    {
        return(
            <div>
                <button onClick={this.googlehandler}>Login with Google</button>
                <button onClick={this.jwthandler}>Login with jwt</button>
            </div>
        )
    }
}

export default Homepage