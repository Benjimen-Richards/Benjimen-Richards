import React from "react";
import Axios from "axios";

const burl = 'http://localhost:905/Bookings'
class HotelBooking extends React.Component {
  constructor() {
    super();
    this.state = {
      Orderid: Math.floor(Math.random() * 10001),
      hotelname: sessionStorage.getItem('hotelname'),
      name: '',
      phoneNumber: ''
    };
  }
  changehandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  buttonhandler = () => {
    Axios.post(burl, this.state)
    this.props.history.push('/')
  }
  renderbooking = (data) => {
    if (data) {
      return (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Orderid</th>
              <th scope="col">HotelName</th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{parseInt(data.Orderid)}</th>
              <th>{data.hotelname}</th>
              <td>
                <input placeholder="Enter name" name='name' onChange={this.changehandler} />
              </td>
              <td>
                <input placeholder="Enter Phone Number" name='phoneNumber' onChange={this.changehandler} />
              </td>
              <td>
                <button onClick={this.buttonhandler}>Submit</button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      );
    }
  };

  render() {
    return <div>{this.renderbooking(this.state)}</div>;
  }
}
export default HotelBooking;
