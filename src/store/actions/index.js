export const GET_SONGS = 'GET_SONGS'
export const GET_SONG_INFO = 'GET_SONG_INFO'
export const GET_SONG_IMAGE = 'GET_SONG_IMAGE'


export const getSongsAction = (artistName, category) => {
    return async (dispatch) => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" +artistName,
                {
                    headers: new Headers({
                        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                        "X-RapidAPI-Key":
                            "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
                    })
                }
            )

            if (response.ok) {
                let result = await response.json();
                let songInfo = result.data;
                dispatch({
                    type: GET_SONGS,
                    payload: songInfo,
                })
                // dispatch({
                //     type: SEARCH_QUERY,
                //     payload: artistName
                // })
                // setTimeout(() => {
                //     dispatch({
                //         type: TOGGLE_LOADER,
                //         payload: false,
                //     })
                // }, 1000)
            } 
            // else {
            //     console.log('error in fetching')
            //     dispatch({
            //         type: TOGGLE_LOADER,
            //         payload: false,
            //     })
            // }
        } catch (error) {
            console.log(error)
          
        }
    }
}






export const getSongInformation = (selectedSong) => ({
    type: GET_SONG_INFO,
    payload: selectedSong,
  })

export const getSongImage = (selectedSong) => ({
    type: GET_SONG_IMAGE,
    payload: selectedSong,
})