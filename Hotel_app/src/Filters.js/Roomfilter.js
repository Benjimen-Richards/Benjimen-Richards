import React from "react";
import './filter.css'
const rmurl = "https://developerfunnel.herokuapp.com/hotellist";

class Roomfilter extends React.Component {
  filterlogic = (e) => {
    const roomnumber = e.target.value;
    // console.log(roomnumber);
    const tripid = sessionStorage.getItem("tripid");
    let updatedurl;
    if (!roomnumber) {
      updatedurl = `${rmurl}/${tripid}`;
    } else {
      updatedurl = `${rmurl}/${tripid}?roomtype=${roomnumber}`;
    }
    fetch(updatedurl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        sessionStorage.setItem("count", res.length)
        this.props.filtereddata(res)
      });
  };
  render() {
    return (
      <div className="col-sm" >
        <centre>Roomfilter</centre>
        <div
          className="room_filter"
          onChange={this.filterlogic}
          style={{
            textAlign: "left",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label className="radio">
            <input type="radio" value="" name="room" />
            All
          </label>

          <label className="radio">
            <input type="radio" value="1" name="room" />
            Deluxe
          </label>

          <label className="radio">
            <input type="radio" value="2" name="room" />
            Premieum
          </label>
          <label className="radio">
            <input type="radio" value="3" name="room" />
            Travel Room
          </label>
          <label className="radio">
            <input type="radio" value="4" name="room" />
            Semi Deluxe
          </label>
        </div>
      </div>
    );
  }
}
export default Roomfilter
