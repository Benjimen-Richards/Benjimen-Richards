import { applyMiddleware, createStore } from "redux";

import promiseMiddleware from 'redux-promise';
import { logger } from 'redux-logger'

// import { reducer } from "../Reducer";
// import Watchingcardreducer from "../reducer/Watchingcardreducer";
// import reducer from '../reducer/Reducer'
import moviesreducer from "../reducer/moviesreducer";
import reducer from "../reducer/Reducer";

const store = createStore(reducer, applyMiddleware(promiseMiddleware))

export default store