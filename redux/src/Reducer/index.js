import { combineReducers } from "redux";
// import { gallery, movies } from "../Action/movies";
import galleryreducer from './galleryreducer'
import moviesreducer from "./moviesreducer";
export const reducer = combineReducers({ galleryreducer, moviesreducer })