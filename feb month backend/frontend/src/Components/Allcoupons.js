import axios from "axios";
import { Component } from "react";

const allcoupon='http://localhost:1111/admin'
const verify='http://localhost:1111/user/verifylogin'
const cart='http://localhost:1111/user/couponcart'

class Allcoupons extends Component
{
    constructor()
    {
        super()

        this.state={
            allcoupons:'',
            usercount:'',
            couponcode:''
        }
    }
    counthandler=(data,couponcode)=>
    {
        if(this.state.usercount<5)
        {
            axios.put(`${cart}/${data}?coupon=${couponcode}`).then(res=>this.setState({usercount:res.data.count}))
        }
        else
        {
            alert("only Five per day")
        }
        
        
    }
    rendercard=(data)=>
    {
        if(data)
        {
            return(data.map(item=>
                (
                    <div class="card">
  <div class="card-body">
    <h5 class="card-title">{item.websitename}</h5>
    <p class="card-text">{item.websiteurl}</p>
    <p class="card-text">{item.discount}</p>
    <button onClick={()=>this.counthandler('6044d391ce9fb31fc43b1482',item.couponcode)}>Copy coupon code</button>
  </div>
</div>
                )))
        }
    }
    render()
    {
        console.log(this.state.usercount)
        return(
            <div>
                    <h4>List of coupons</h4>
                    {this.rendercard(this.state.allcoupons)}
            </div>
        )
    }
   async componentDidMount()
    {
const data = await fetch({
    url:verify,
    method:'POST',
    headers:{
        "usertoken":sessionStorage.getItem("token")
    }
})
console.log(data)
        axios.get(allcoupon).then(res=>this.setState({allcoupons:res.data,usercount:''}))
    }
}
export default Allcoupons