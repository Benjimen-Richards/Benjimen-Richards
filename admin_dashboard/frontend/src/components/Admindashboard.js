/* eslint-disable no-undef */
import Adduser from "./Adduser";
import Model from 'react-modal'
const { default: axios } = require("axios");
const { Component } = require("react");
const allusers='http://localhost:1111/admin'
const getuser='http://localhost:1111/admin/getuser'
const edituser='http://localhost:1111/admin/edituser'
const deactivate='http://localhost:1111/admin/deactivate'
const deleteurl='http://localhost:1111/admin/delete'

class Admindashboard extends Component
{
    constructor()
    {
        super()
        this.state={
            users:'',
            name:'',
            email:'',
            password:'',
            role:'',
            isActive:'',
            model:false
        }
    }
    deletehandler=(id)=>
    {
        axios.delete(`${deleteurl}/${id}`).then(res=>this.setState({users:res.data}))
    }
    edithandler=(id)=>
    {
        axios.get(`${getuser}/${id}`).then(res=>this.setState({name:res.data.name,_id:res.data._id,
        email:res.data.email,
        password:res.data.password,
        role:res.data.role,
        isActive:res.data.isActive,}))
        this.setState({model:true})
    }
 
   
  rendertable=(data)=>
  {
      if(data.length>0)
      {
          return data.map(item=>(
                <tbody>
                <tr>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.isActive}</td>
                <td>{item.role}</td>
                <td>
                    <button className='btn btn-warning' onClick={()=>this.edithandler(item._id)} >Edit</button>
                    <button className="btn btn-danger"onClick={()=>this.deletehandler(item._id)} style={{marginLeft:"10px"}} >DeleteUser</button>
                </td>
                </tr>
            </tbody>
           
          ))
      }
      else
      {
          return <h2>No data avaliable</h2>
      }
  }
  submithandler=(id)=>
  {
    console.log(this.state)
    axios.put(`${edituser}/${id}`,this.state).then(res=>this.setState({users:res.data}))
 this.setState({model:false})
  }
    render()
    {
        console.log("single",this.state.users.length)
        return(
            <div>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">isActive</th>
                <th scope="col">role</th>
                <th scope="col">operations</th>
                </tr>
            </thead>
            {this.rendertable(this.state.users)}
            </table>
            <div>
            <Model isOpen={this.state.model} style={{overlay:{backgroundColor:'black'},content:{width:'500px',marginLeft:'30%'}}} onRequestClose={()=>this.setState({model:false})}>
           <div style={{width:'100%'}} >
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
                        <select name='role' value={this.state.role} onChange={(e)=>this.setState({[e.target.name]:e.target.value})}>
                            <option value='User'>User</option>
                            <option value='Admin'>Admin</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Isactive</label>
                        <br/>
                        <select name='isActive' onChange={(e)=>this.setState({[e.target.name]:e.target.value})}>
                            <option value='true'>true</option>
                            <option value='false'>false</option>
                        </select>
                    </div>
                    <button type='button' onClick={()=>this.submithandler(this.state._id)} class="btn btn-primary">Submit</button>
                    <button className='btn btn-warning' onClick={()=>this.setState({model:false})}>Close</button>
            </div>
            </Model>
            </div>
           <Adduser userdata={(data)=>this.setState({users:data})}/>
        </div>
        )
    }
    componentDidMount()
    {
        axios.get(allusers).then(res=>this.setState({users:res.data}))
    }
}
export default Admindashboard