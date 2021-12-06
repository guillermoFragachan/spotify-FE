import { initialState } from "../index.js";
import {
  GET_SONG_INFO,
  GET_SONG_IMAGE,
  LATEST_SEARCHES,
} from "../actions/index.js";

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SONG_INFO:
      return {
        ...state,
        songInformation: payload,
      };
    case GET_SONG_IMAGE:
      return {
        ...state,
        songImage: payload,
      };

    case LATEST_SEARCHES:
      return {
        ...state,
        latestSearches: [
          ...state.latestSearches,
          state.latestSearches.filter((item, index) => index !== action.index)
        ]
      };

    default:
      return state;
  }
};

export default mainReducer;
