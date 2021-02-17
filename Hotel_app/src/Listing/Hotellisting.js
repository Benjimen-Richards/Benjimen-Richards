import React from "react";
import './hotellisting.css'
import Costfilter from "../Filters.js/Costfilter";
import Roomfilter from "../Filters.js/Roomfilter";
import ListingDisplay from "./Listdisplay";

const Hotellist = "https://developerfunnel.herokuapp.com/hotellist";
class Hotellisting extends React.Component {
  constructor() {
    super();
    this.state = {
      hotelsdata: "",
    };
  }

  setdata = (data) => {
    console.log(data); if (data) {
      this.setState({
        hotelsdata: data,
      });
    }
    else {
      <h1>No data found for given option</h1>
    }
  };
  setcostfilter = (data) => {
    console.log(data);
    if (data) {
      this.setState({
        hotelsdata: data,
      });
    }
    else {
      <h1>No data found for given option</h1>
    }
  };
  render() {
    if (!sessionStorage.getItem('logintoken')) {
      sessionStorage.setItem("loginerr", "Login To continue Booking")
      this.props.history.push('/login')
    }
    return (
      <div className="listing_container">
        <div className="content" >
          <div className="sidebar">
            <Roomfilter filtereddata={(data) => this.setdata(data)} />
            <Costfilter costfilter={(value) => this.setcostfilter(value)} />
          </div>
          <div className="maincontent">
            <ListingDisplay data={this.state.hotelsdata} />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const tripid = this.props.match.params.id;
    sessionStorage.setItem("tripid", tripid);
    fetch(`${Hotellist}/${tripid}`, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ hotelsdata: res })
        sessionStorage.setItem("count", res.length)
      });
  }
}
export default Hotellisting;
