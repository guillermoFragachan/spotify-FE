import { initialState } from '../index.js'
import { GET_SONG_INFO, GET_SONGS } from '../actions/index.js'



const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONG_INFO:
        return {
          ...state,
          songInformation: action.payload,
        }

    case GET_SONGS:
        
      

    default:
      return state
  }
}

export default mainReducer