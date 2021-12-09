export const GET_SONGS = "GET_SONGS";
export const GET_SONG_INFO = "GET_SONG_INFO";
export const GET_SONG_IMAGE = "GET_SONG_IMAGE";
export const LATEST_SEARCHES = "LATEST_SEARCHES";
export const LATEST_RESULTS = "LATEST_RESULTS";
export const TOGGLE_LOADER = "TOGGLE_LOADER";
export const LIKED_ALBUMS = "LIKE_ALBUMS";

export const getSongsAction = (artistName, category) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          headers: new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          }),
        }
      );

      if (response.ok) {
        let result = await response.json();
        let songInfo = result.data;
        dispatch({
          type: GET_SONGS,
          payload: songInfo,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchResultsArray = (e, search) => {
  return async (dispatch) => {
    try {
      e.preventDefault();
      dispatch(toggleLoader(true));
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: LATEST_RESULTS,
          payload: data.data,
        });
        dispatch(getLatestSearches(data.data[0].artist));
        dispatch(toggleLoader(false));
      }
    } catch (error) {
      dispatch(toggleLoader(false));
      console.log(error);
    }
  };
};


export const getLikedAlbums = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/albums`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.data)
        dispatch({
          type: LIKED_ALBUMS,
          payload: data.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}



export const getSongInformation = (selectedSong) => ({
  type: GET_SONG_INFO,
  payload: selectedSong,
});

export const getSongImage = (selectedSong) => ({
  type: GET_SONG_IMAGE,
  payload: selectedSong,
});

export const getLatestSearches = (latestSearches) => ({
  type: LATEST_SEARCHES,
  payload: latestSearches,
});

const toggleLoader = (bool) => ({
  type: TOGGLE_LOADER,
  payload: bool,
});