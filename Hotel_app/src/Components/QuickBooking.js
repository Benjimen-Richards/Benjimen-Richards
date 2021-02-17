import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const hoteltypeurl = "https://developerfunnel.herokuapp.com/booking";
class QuickBooking extends React.Component {
  constructor() {
    super();
    this.state = {
      hoteltype: "",
    };
  }
  rendercard = (data) => {
    if (data) {
      return data.map(item => (
        <div class="card">
          <img class="card-img-top" src={item.image} alt="/" />
          <div class="card-body">
            <h5 class="card-title">{item.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to={`/hoteltype/${item.trip}`} class="btn btn-primary">Hotels of {item.name}</Link>
          </div>
        </div>
      ))
    }
  }
  render() {
    console.log(this.state.hoteltype)
    return (
      <div class="row">
        <h1>Book According to ur vaction</h1>
        <div className="quickbooking">
          {this.rendercard(this.state.hoteltype)}
        </div>

      </div>
    );
  }
  componentDidMount() {
    fetch(hoteltypeurl, { method: "GET" })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          hoteltype: res,
        })
      );
  }
}
export default QuickBooking;
