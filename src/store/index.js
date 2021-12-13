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
  songInformation: {
    "id": 2114399,
    "readable": true,
    "title": "Enter Sandman",
    "title_short": "Enter Sandman",
    "title_version": "",
    "link": "https://www.deezer.com/track/2114399",
    "duration": 331,
    "rank": 906110,
    "explicit_lyrics": false,
    "explicit_content_lyrics": 0,
    "explicit_content_cover": 0,
    "preview": "https://cdns-preview-9.dzcdn.net/stream/c-92d5bbb148445d41dc7be319744f1691-6.mp3",
    "md5_image": "f1c31620f0e108b707ce1a1af0954158",
    "artist": {
      "id": 119,
      "name": "Metallica",
      "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
      "type": "artist"
    },
    "type": "track"
  },
  songImage: 'https://e-cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/56x56-000000-80-0-0.jpg',
  songPlaying: false,
  favoriteSongs: []
};
const configureStore = createStore(
  mainReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
);

export default configureStore;