const { Component } = require("react");

class Playground extends Component
{
    // eslint-disable-next-line no-undef
    buttonhandler=()=>
    {
        alert("clikced")
    }
    render()
    {
        return(
            <div>
                <button onClick={this.buttonhandler}>Clicked</button>
            </div>
        )
    }
}
export default Playground