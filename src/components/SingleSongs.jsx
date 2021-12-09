import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { getSongInformation, getSongImage, playSong } from "../store/actions/index.js";

function SingleSongs({ song, index, img, album }) {

  const likedSongs = useSelector(state => state.favoritesSongs);


  const [liked, setLiked] = useState(false);


  //data[index].id
  const fetchLikes = (likedSong, method, id) => {
    likedSong.album = album;
    delete likedSong?.album?.album;
    delete likedSong.album?.tracks;
    delete likedSong.album?.artist;

    // console.log(JSON.stringify(likedSong));


    let url = "https://spotify-be-app.herokuapp.com/likes/" ;

    let urlDelete = "https://spotify-be-app.herokuapp.com/likes/" + id;

    if (!method) {
      fetch(url, {
        method: method || "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(likedSong),
      })
        .then((response) => {
          
          return response.json();
        })
        .then(console.log("liked"));
      
      }else{
          fetch(urlDelete, {
            method: "DELETE"
          })
            .then((res) => console.log(res, "deleted"))
        }

    
  };

  

  const dispatch = useDispatch();

  useEffect(() => {}, [liked]);

  useEffect(() => {
    if (likedSongs.length>0 ) {
      console.log( 'dasdasd');

      // setLiked(likedSongs.some((likedSong) => likedSong.id === song.id));
      if(likedSongs.filter((song => song.id === song.id))){
        setLiked(true);
        console.log("liked");
      };
    }
    
  }, []);
  return (
    <div
      className="col-12 d-flex flex-column mb-0 background-list"
      onClick={() => {
        dispatch(getSongInformation(song));
        dispatch(getSongImage(img));
        dispatch(playSong(false));
      }}
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div className="d-flex align-items-center justify-content-center"
          onDoubleClick={() => {

            dispatch(playSong(true));
          }}
          > {/*double click auto play*/}
            <div className="d-flex my-auto m-0">
              <span className="length-song">{index + 1}</span>
            </div>
            <img
              className="artist-pic"
              src={`https://e-cdns-images.dzcdn.net/images/cover/${song.md5_image}/264x264-000000-80-0-0.jpg`}
            />
            <div className="d-flex flex-column">
              <p className="line-breaker">{song.title_short}</p>
              {song.explicit_lyrics === true && (
                <span className="explicit-content">E</span>
              )}
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="d-flex flex-row">
            {liked ? (
              <i
                class="bi bi-heart-fill liked mr-5"
                onClick={() => {
                  fetchLikes(song, "DELETE", song.id);
                  setLiked(false);
                }}
              ></i>
            ) : (
              <i
                class="bi bi-heart unliked mr-5"
                onClick={() => {
                  // console.log(JSON.stringify(song))
                  fetchLikes(song);
                  setLiked(true);
                }}
              ></i>
            )}

            <p className="views">2:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleSongs;
