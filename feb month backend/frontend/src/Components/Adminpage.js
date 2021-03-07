import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

const dummyurl='http://localhost:1111/admin/validate/'
class Adminpagedashboard extends Component
{
    constructor()
    {
        super()
        this.state={
            allcoupons:'',
        }
    }
    validatehandler=(id)=>
    {
        axios.get(`${dummyurl}${id}`).then(res=>{
            if(res.data.token==='')
            {
                alert("Coupon expired")
                axios.get('http://localhost:1111/admin').then(res=>this.setState({allcoupons:res.data}))
            }
            else
            {
                alert("token is active")
            }
        })
        this.props.history.push('/dashboard')
    }
    rendertable=(data)=>
    {
        if(data)
        {
            return(data.map((coupon,idx)=>(
                <tr>
                            <td >{coupon.username}</td>
                            <td >{coupon.websitename}</td>
                            <td >{coupon.websiteurl}</td>
                            <td >{coupon.couponcode}</td>
                            <td >{coupon.token!==""?"Valid coupon":"not valid"}</td>
                            <td><button onClick={()=>this.validatehandler(coupon._id)}style={{backgroundColor:"white",borderRadius:"10px"}}>Validate token</button></td>
                </tr>
                                
            ))
            )}
    }
    render()
    {
        return(
            <div>
                <h1>All coupons</h1>
                <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">Username</th>
                            <th scope="col">websitename</th>
                            <th scope="col">websiteurl</th>
                            <th scope="col">couponcode</th>
                            <th scope="col">expiry of coupon</th>
                            <th scope="col">Validation button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.rendertable(this.state.allcoupons)}
                        </tbody>
                </table>
                <Link to='/adminadd'><button className='btn btn-primary'>Add coupon</button></Link>
                <Link to='/adduser'><button className='btn btn-primary'>Add User</button></Link>
            </div>
        )
    }

    componentDidMount()
    {
        axios.get('http://localhost:1111/admin').then(res=>this.setState({allcoupons:res.data}))
    }
}
export default Adminpagedashboard