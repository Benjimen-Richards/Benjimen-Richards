import React from "react";
import "./Quicksearch.css";
import { withRouter } from 'react-router-dom'
const url = "https://developerfunnel.herokuapp.com/location";
const hotelurl = " https://developerfunnel.herokuapp.com/hotels?city=";
class Quicksearch extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "",
      hotels: "",
    };
  }
  rendercity = (data) => {
    if (data) {
      return data.map((user) => (
        <option className="options" value={user.city}>{user.city_name}</option>
      ));
    }
  };
  selectChangehandler = (e) => {
    const value = e.target.value;
    fetch(`${hotelurl}${value}`, { method: "GET" })
      .then((Response) => Response.json())
      .then((Response) => this.setState({ hotels: Response }));
  };
  renderHotel = (hotels) => {
    if (hotels) {
      return hotels.map((hotel) => (
        <option value={hotel._id}>{hotel.name}</option>
      ));
    }
  };

  renderselect = (e) => {
    const value = e.target.value
    this.props.history.push(`/details/${value}`)
  }
  render() {
    console.log(this.props)
    return (
      <div className="quicksearch">
        <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=2119&height=1195&fit=crop&format=pjpg&auto=webp" alt='/' />
        <select onChange={this.selectChangehandler}>
          <option>====Select City====</option>
          {this.rendercity(this.state.location)}
        </select>
        <select onChange={this.renderselect}>
          <option>====Select City====</option>
          {this.renderHotel(this.state.hotels)}
        </select>
      </div>
    );
  }
  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((Response) => Response.json())
      .then((Response) => this.setState({ location: Response }));
  }
}
export default withRouter(Quicksearch)
