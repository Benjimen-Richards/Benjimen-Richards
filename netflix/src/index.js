import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mainrouter from './Mainrouter';
import store from './redux/store/Store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Mainrouter />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
