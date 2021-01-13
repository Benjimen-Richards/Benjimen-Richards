import axios from "axios";
import { Component } from "react";
const api = "http://localhost:1234/movies";
class Addjson extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: "",
            genere: "Documentary",
            imageurl: ""
        };
    }
    inputhandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    submithandler = async () => {
        console.log(this.state)
        await axios.post(api, this.state).then(res => console.log('success', res))
    }

    render() {
        return (
            <div>

                <input
                    placeholder="id"
                    name="id"
                    value={this.state.id}
                    onChange={this.inputhandler}

                />
                <input
                    placeholder="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.inputhandler}
                />
                <input
                    placeholder="genere"
                    name="genere"
                    value={this.state.genere}
                // onChange={this.inputhandler}
                />
                <input
                    placeholder="imageurl"
                    name="imageurl"
                    value={this.state.imageurl}
                    onChange={this.inputhandler}
                />
                <button onClick={this.submithandler}>Post</button>
            </div>
        );
    }

}
export default Addjson;