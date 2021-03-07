import axios from "axios";
import { Component } from "react";
const adduserurl='http://localhost:1111/admin/adduser'
class Addcoupon extends Component
{
    constructor()
    {
        super()
        this.state={
            username:'',
            websitename:'',
            websiteurl:'',
            discount:'',
            category:'',
            coupondisplay:'none'
        }
    }
    changehandler=(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    buttonhandler=()=>
    {
        // console.log(this.state)
        axios.post(adduserurl,this.state).then(res=>this.setState({datecreated:res.data}))
    }
    renderdata=(data)=>
    {
        if(data)
        {
            setTimeout(()=>{
                this.props.history.push('/dashboard')
            },1000)
            return(
                <div style={{textAlign:'start'}}>
                    <h4>username={data.username}</h4>
                    <h4>couponcode={data.couponcode}</h4>
                    <h4>websiteurl={data.websiteurl}</h4>
                    <h4>category={data.category}</h4>
                    <h4>discount={data.discount}</h4>
                </div>
                
            )
            
            
        }
    }
    render()
    {
        return(
            <div style={{width:'500px',margin:'100px',marginLeft:'500px'}}>
            <div class="input-group mb-3" >
                <span class="input-group-text" id="basic-addon1">Username</span>
                <input type="text" class="form-control" placeholder='Enter username' name='username' value={this.state.username} onChange={this.changehandler}/>
                </div>
                <div>
                    <select class="form-select" name='websitename' value={this.state.websitename} onChange={this.changehandler}>
                            <option selected>Select website </option>
                            <option value='Amazon' selected>Amazon</option>
                            <option value='Flipkart'>Flipkart</option>
                            <option value='Myntra'>Myntra</option>
                    </select>
                </div>
                <br/>
                <div>
                    <select class="form-select" name='websiteurl' value={this.state.websiteurl} onChange={this.changehandler}>
                        <option selected>Select website url</option>
                        <option value='https://www.amazon.in/ref=nav_logo' selected>Amazon url</option>
                        <option value='https://www.flipkart.com/'>Flipkart url</option>
                        <option value='https://www.myntra.com/'>Myntra url</option>
                    </select>
                </div><br/>
                <div>
                    <select class="form-select" name='discount' value={this.state.discount} onChange={this.changehandler}>
                                <option selected>Select coupon discount</option>
                                <option value='50%' selected>50%</option>
                                <option value='60%'>60%</option>
                                <option value='70%'>70%</option>
                                <option value='30%'>30%</option>
                                <option value='40%'>40%</option>
                    </select>
                </div><br/>
                <div>
                    <select class="form-select" name='category' value={this.state.category} onChange={this.changehandler}>
                            <option selected>Select coupon category</option>
                            <option value='Phone' selected>Phone</option>
                            <option value='Bikes'>Bikes</option>
                            <option value='Household'>Household</option>
                            <option value='Groceries'>Groceries</option>
                            <option value='Stationary'>Stationary</option>        
                    </select>
                </div><br/>
                <button onClick={this.buttonhandler} className='btn btn-success'>Submit</button><br/>
                <div>
                    {this.renderdata(this.state.datecreated)}
                </div>
            </div>
        )
    }
}
export default Addcoupon