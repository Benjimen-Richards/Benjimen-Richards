import "./Listdisplay.css";
import { Link } from "react-router-dom";
const ListingDisplay = (props) => {
  const renderlist = (data) => {

    if (data) {
      return data.map((item) => (
        <div class="card">
          <img style={{ width: "100%", height: "200px" }} class="card-img-top" src={item.thumb} alt="/" />
          <div class="card-body">
            <Link to={`/details/${item._id}`}>
              <h5 className="card-title">{item.name}</h5>
            </Link>
            <p style={{ overflow: "hidden", height: "100px" }}>{item.address}</p>
            <p><b>Cost per night:{item.cost}</b></p>
            <Link to={`/details/${item._id}`} class="btn btn-primary">Book Now</Link>
          </div>
        </div>
      ));
    } else {
      return (
        <img
          src="https://i.gifer.com/origin/e0/e0ea055299e92297b2ec0ef1c80696bf_w200.gif"
          style={{
            width: "200px",
            height: "200px",
          }}
          alt="/"
        />
      );
    }
  };
  return (
    <div>
      <h6 style={{ paddingLeft: 0 }} >Results {sessionStorage.getItem("count")}</h6>
      <div className="quickbooking" >
        {renderlist(props.data)}
      </div >
    </div>
  );
};
export default ListingDisplay;
