import { Link } from "react-router-dom";
const Card = (props) => {
  console.log(props);
  const rendercard = (data) => {
    if (data) {
      return data.map((item) => (
        <div className="card_container">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={item.image} alt="/" />
            <div className="card-body">
              <Link className="link" to={`/hoteltype/${item.trip}`}>
                <h5 className="card-title">{item.name}</h5></Link>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                </p>
            </div>
          </div >
        </div >
      ));
    }
  };

  return (
    <div class="container">
      {rendercard(props.data)}
    </div>
  );
};
export default Card;
