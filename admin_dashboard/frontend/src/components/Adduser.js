import axios from 'axios'
import React, { Component, useState } from 'react'
import Model from 'react-modal'
const adminadduser='http://localhost:1111/admin/adduser'
class Adduser extends Component{
  constructor()
  {
      super()
      this.state={
          model:false,
          name:'',
          email:'',
          password:'',
          role:'',
          isActive:'',
          users:''
      }
  }
  
  render()
  {
    
    // console.log(this.state)
    return (
        <div>
           <button className='btn btn-warning' onClick={()=>this.setState({model:true})}>Add user</button>
           <Model isOpen={this.state.model} style={{overlay:{backgroundColor:'black'},content:{marginLeft:'30%',width:"500px",display:'flex',textAlign:'center'}}} onRequestClose={()=>this.setState({model:false})}>
           <form style={{width:'100%'}} onSubmit={(e)=>{
               e.preventDefault()
               axios.post(adminadduser,this.state).then((res)=>this.props.userdata(res.data))
            this.setState({model:false})
           }}>
           <h3>Registration form</h3>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name of the users</label>
                        <input type="text" name='name' value={this.state.name} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>this.setState({[e.target.name]:e.target.value})}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="text" name='email' value={this.state.email}class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={(e)=>this.setState({[e.target.name]:e.target.value})}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input name='password' value={this.state.password}  type="password" class="form-control" id="exampleInputPassword1"onChange={(e)=>this.setState({[e.target.name]:e.target.value})}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Role</label>
                        <br/>
                        <select name='role' onChange={(e)=>this.setState({[e.target.name]:e.target.value})}>
                            <option value='User'>User</option>
                            <option value='Admin'>Admin</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">isActive</label>
                        <br/>
                        <select name='isActive' onChange={(e)=>this.setState({[e.target.name]:e.target.value})}>
                            <option value='true'>true</option>
                            <option value='false'>false</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <button className='btn btn-warning' onClick={()=>this.setState({model:false})}>Close</button>
            </form>
           </Model>
        </div>
    )
  }
}

export default Adduser
