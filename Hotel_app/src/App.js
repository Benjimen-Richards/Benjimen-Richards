import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Hotellisting from "./Listing/Hotellisting";
import HotelBooking from "./Components/Hotelbooking";
import Details from "./Details/Details";
import Booking from "./booking/Booking";
import Registercomponent from "./Login/RegisterComponent";
import LoginComponent from "./Login/Logincomponent";
import Profile from "./Login/Profile";
import UserList from './Login/Userlist'
import editpage from "./Login/editpage";
import Adduser from "./Login/Adduser";




const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/hoteltype/:id" component={Hotellisting} />
          <Route path="/details/:id" component={Details} />
          <Route path="/hotelbooking/:id" component={HotelBooking} />
          <Route path="/viewbooking" component={Booking} />
          <Route path="/register" component={Registercomponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={UserList} />
          <Route path="/editpage/:id" component={editpage} />
          <Route path="/admin/users" component={Adduser} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
