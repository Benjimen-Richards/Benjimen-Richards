const { default: axios } = require("axios");
const { Component } = require("react");

class Adduser extends Component
{
    constructor()
    {
        super()
        this.state={
            username:''
        }
    }
    buttonhandler=()=>
    {
        axios.post('http://localhost:1111/user/adduser',this.state).then(()=>
        {
            this.props.history.push('/dashboard')
        })
    }
    render()
    {
        return(
            <div>
                <input placeholder='Enter user name' onChange={(e)=>this.setState({username:e.target.value})} name='username'/>
                <button onClick={this.buttonhandler}>Complete registration</button>
            </div>
        )
    }
}
export default Adduser