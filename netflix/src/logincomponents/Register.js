import { Component } from "react";

class Register extends Component {
    render() {
        console.log('registername', sessionStorage.getItem('register_email'))
        return (
            <div>
                <h1>Hi! {sessionStorage.getItem('register_email')}</h1>
            </div>
        )
    }
}
export default Register