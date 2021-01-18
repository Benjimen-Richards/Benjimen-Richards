import { combineReducers } from "redux";
import cardreducer from './cardreducer'
import moviesreducer from './moviesreducer'
const reducer = combineReducers({ cardreducer, moviesreducer })
export default reducer