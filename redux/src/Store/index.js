import { applyMiddleware, createStore } from "redux";

import promiseMiddleware from 'redux-promise';
import { logger } from 'redux-logger'

import { reducer } from "../Reducer";
import moviesreducer from "../Reducer/moviesreducer";

const store = createStore(reducer, applyMiddleware(promiseMiddleware, logger))

export default store