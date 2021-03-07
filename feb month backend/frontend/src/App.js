import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Homepage from './Components/Homepage';
import Addcoupon from './Components/Addcoupon'
import Validatecoupon from './Components/Validatecoupon';
import Adminpagedashboard from './Components/Adminpage';

import Adduser from './Components/Adduser';
import Allcoupons from './Components/Allcoupons';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Homepage}/>
        <Route path='/dashboard'  component={Adminpagedashboard}/>
        <Route path='/adminadd'  component={Addcoupon}/>
        <Route path='/allcoupons'  component={Allcoupons}/>
        <Route path='/adduser'  component={Adduser}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
