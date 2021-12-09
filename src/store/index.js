import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import mainReducer from "./reducers/index.js";
import thunk from "redux-thunk";

const aComposeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  songs: {
    category: [],
    rockSongs: [],
    popSongs: [],
  },
  latestSearches: [],
  latestResultsSearch: [],
  likedAlbums: [],
  loader: false,
  songInformation: null,
  songImage: null,
};
const configureStore = createStore(
  mainReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
);

export default configureStore;