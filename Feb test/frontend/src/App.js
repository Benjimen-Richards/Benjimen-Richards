
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Loginpage from './Components/Loginpage';
import Categories from './Components/Categories';
import Productpage from './Components/Productpage';
 
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Route path='/' exact component={Loginpage}/>
       <Route path='/Categories' component={Categories}/>
       <Route path='/products/:name' component={Productpage}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
