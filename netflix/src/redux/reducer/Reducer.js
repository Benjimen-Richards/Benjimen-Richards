import { combineReducers } from "redux";
import watchlist_reducer from './watchlist_reducer'
import moviesreducer from './watchingcard'
const reducer = combineReducers({ watchlist_reducer, moviesreducer })
export default reducer