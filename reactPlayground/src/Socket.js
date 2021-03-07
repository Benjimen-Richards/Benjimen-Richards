
import React, {  Component } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001";
const socket = socketIOClient(ENDPOINT);
class Socketpage extends Component{
  constructor()
  {
    super()
    this.state={
      response:''
    }
  }
  
 changehandler=(e)=>
 {
   this.setState({response:e.target.value})
 }
   buttonhandler=()=>
  {
    socket.emit('sendmessage',this.state.response,()=>{
      console.log("message delivered")
    })
  }
 
  render()
  {
  return (
    <p>
    <p className='paragraph'></p><br/>
    <input onChange={this.changehandler} placeholder='messgae'/>
    <button onClick={this.buttonhandler}>Submit</button>
    </p>
  );
}
componentDidMount()
{
  socket.on("message",(msg)=>
    {
      this.setState({response:msg})
      const paragr=document.querySelector('.paragraph')
      paragr.insertAdjacentHTML('beforeend',`<h3>${msg}</h3>`)
    })
}
}

export default Socketpage;