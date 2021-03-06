import { Component } from "react";
import axios from 'axios'
const data = 'http://localhost:1111/coupon'
const userprofile = 'http://localhost:1111/google/profile'
const categoriesurl = 'http://localhost:1111/coupon/categories'
class Categories extends Component
{
  constructor()
  {
    super()
    this.state={
      coupons:'',
      categories:'',
      user:''
    }
  }
  clickhandler=(data)=>
  {
    console.log(data)
    this.props.history.push(`/products/${data}`)
  }
  logouthandler=()=>
  {
    sessionStorage.removeItem('username')
    this.props.history.push('/')
  }
  rendercategories=(data)=>
  {
    if(data)
    {
      return data.map(item=>(<li onClick={()=>this.clickhandler(item.name)}>{item.name}</li>))
    }
  }
  render()
  {
    return(
      <div>
        {this.rendercategories(this.state.categories)}
        <button onClick={this.logouthandler}>Logout</button>
      </div>
    )
  }
  async componentDidMount()
  {
   await  axios.get(data).then(res=>this.setState({coupons:res.data}))
   await  axios.get(categoriesurl).then(res=>this.setState({categories:res.data}))
   await  axios.get(userprofile).then(res=>sessionStorage.setItem("username",res.data.displayName))
   if(!sessionStorage.getItem("username"))
  {
    this.props.history.push('/')
  }
  }
}
export default Categories