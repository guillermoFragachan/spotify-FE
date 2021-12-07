import React from "react";
import { useDispatch } from 'react-redux'
import {getSongInformation, getSongImage} from '../store/actions/index.js'


function SingleSongs({ song, index, img }) {

  const dispatch = useDispatch()

  return (
    <div className="col-12 d-flex flex-column mb-0 background-list" onClick={()=>{
      dispatch(getSongInformation(song))
      dispatch(getSongImage(img))
    }}>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div className="d-flex align-items-center justify-content-center">
            <div className="d-flex my-auto m-0">
              <span className="length-song">{index + 1}</span>
            </div>
            <img
              className="artist-pic"
              src={`https://e-cdns-images.dzcdn.net/images/cover/${song.md5_image}/264x264-000000-80-0-0.jpg`}
            />
            <div className="d-flex flex-column">
              <p className="line-breaker">{song.title_short}</p>
              <span className="explicit-content">E</span>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="d-flex flex-row">
            <img className="unliked" src="./img/heart-64.svg" />
            <p className="views">2:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SingleSongs;