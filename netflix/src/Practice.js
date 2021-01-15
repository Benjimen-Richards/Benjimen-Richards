import { Component } from "react";
import { Link } from "react-router-dom";
import './Practice.css'
class Practice extends Component {
    constructor() {
        super()
        this.state =
        {
            visible: false
        }
    }
    visiblehandler = () => {
        this.setState({ visible: !this.state.visible })
    }
    // styles=()=>
    // {
    //     visibility: this.state.visible ,

    // }
    visiblehandl = () => {
        alert('click')
    }
    render() {
        return (
            <div className='practice_container'>
                <div className='text'>
                    <button onClick={this.visiblehandler}>text</button>
                </div>
                {
                    this.state.visible && <div className='list' class="w3-container w3-center w3-animate-top" style={{ visibility: this.state.visible }}>
                        <li onClick={this.visiblehandl}>a</li>

                        <li>b</li>
                        <li>c</li>
                    </div>
                }
            </div>
        )
    }
}
export default Practice