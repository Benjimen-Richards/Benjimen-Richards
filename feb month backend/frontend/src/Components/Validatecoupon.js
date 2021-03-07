import axios from "axios";

const { Component } = require("react");
const validateurl ='http://localhost:1111/admin/validate/'
class Validatecoupon extends Component
{
    constructor()
    {
        super()
        this.state={
            coupon:''
        }
    }
    validatecoupon=(data)=>
    {
        if(!data.used)
        {
            return <h1>Coupon is valid</h1>
        }
        else
        {
            return <h1>Coupon is not valid</h1>
        }
    }
    render()
    {
        console.log("r",this.state.coupon)
        return (
            <div>
                <h1>Coupon validation</h1>
                {this.validatecoupon(this.state.coupon)}
            </div>
        )
    }
    componentDidMount()
    {
        axios.get(validateurl).then(res=>this.setState({coupon:res.data}))
    }
}
export default Validatecoupon