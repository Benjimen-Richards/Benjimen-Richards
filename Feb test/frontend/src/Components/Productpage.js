import React, { Component } from 'react'
import axios from 'axios'
import {v4 as uuidv4 } from 'uuid'
import { Redirect } from 'react-router'
const data='http://localhost:1111/coupon/category/'
const validateurl='http://localhost:1111/coupon/validate'

class Productpage extends Component{
    constructor()
    {
        super()
        this.state={
            products:'',
            qrcode:'',
            qrtext:'',
            coupon:'',
            url:'',
            displayimg:'none'
        }
    }
    changehandler=(e)=>
    {
        this.setState({qrtext:e.target.value})
    }
    submithandler=()=>
    {
        // console.log(this.state.url)
        if(this.state.coupon===this.state.qrtext)
        {
            this.setState({displayimg:'none'})
            window.location.href=this.state.url
        }
        else
        {
            alert("its not a match")
        }
    }
    buttonhandler=(name,url)=>
    {
        // console.log(name,url)
        const coupon = uuidv4()
        // const coupon = "r"
        this.setState({coupon,url,displayimg:'block'})
        axios.post(`${validateurl}/${coupon}`).then(res=>this.setState({qrcode:res.data}))
    }
    logouthandler=()=>
  {
    sessionStorage.removeItem('username')
    this.props.history.push('/')
  }
    renderproducts=(data)=>
    {
        if(data)
        {
            return data.map(item=>
                (
                    <div class="card" style={{width:"18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Websitename = {item.name}</h5>
    <h5 class="card-title">Product ={this.state.category}</h5>
    <h5 class="card-title">Discounted price = {item.off}</h5>
    <h5 class="card-title">created on = {new Date(item.date).toLocaleString()}</h5>
    <button class="btn btn-primary" onClick={()=>this.buttonhandler(item.name,item.url)}>Go to Validate</button>
    </div>
</div>
                ))
        }
    }
   render()
   {
    //    console.log(this.state.products)
    if(!sessionStorage.getItem("username"))
  {
    this.props.history.push('/')
  }
    return (
        <div >
            <div style={{display:'flex'}}>
            {this.renderproducts(this.state.products)}
            </div>
                <div style={{display:this.state.displayimg}}>
                <img src={this.state.qrcode} alt='/'/>
                <input placeholder='enter qr code text to verify' onChange={this.changehandler}/>
                <button onClick={this.submithandler}>verify</button>
                </div>
                <button onClick={this.logouthandler}>Logout</button>
  </div>
    )
   }
   componentDidMount()
   {
       const category =this.props.match.params.name
       console.log(category)
       axios.get(`${data}${category}`).then(res=>this.setState({products:res.data,category:category}))
       this.setState({qrcode:''})
    
   }
}

export default Productpage
