
import { Route } from 'react-router-dom';
import './App.css';
import Admindashboard from './components/Admindashboard';
import Playground from './components/playground';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={Admindashboard}/>
      <Route path='/play' component={Playground}/>
    </div>
  );
}

export default App;
