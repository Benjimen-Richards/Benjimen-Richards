import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
const detailsurl = "https://developerfunnel.herokuapp.com/hotelsdetails";

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      tripid: sessionStorage.getItem("tripid"),
      hoteldata: "",
    };
  }
  renderelement = (data) => {
    console.log(data)
    if (data) {
      const item = this.state.hoteldata
      return (

        <div class="card mb-3" style={{ width: "80%", height: "100%" }}>
          <img src={item.thumb} style={{ width: "100%", height: "500px" }} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <i>{item.name}</i>
            </h5>
            <p class="card-text">Address:{item.address}</p>
            <p class="card-text">Cost per Night :{item.cost}</p>
            <p class="card-text">
              <Link to={`/hotelbooking/${item._id}`}>
                <button class="btn btn-primary" >Booking</button>
              </Link>
            </p>
          </div>
        </div>
      );
    }
  };
  render() {
    if (!sessionStorage.getItem('logintoken')) {
      sessionStorage.setItem("loginerr", "Login To continue Booking")
      this.props.history.push('/login')
    }
    sessionStorage.setItem('hotelname', this.state.hoteldata.name)
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {this.renderelement(this.state.hoteldata)}
      </div>
    );
  }
  async componentDidMount() {
    const id = this.props.match.params.id;
    const response = await Axios.get(`${detailsurl}/${id}`, {
      method: "GET",
    });
    this.setState({ hoteldata: response.data[0] });

  }
}

export default Details;
