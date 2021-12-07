import React from "react";

import { useDispatch } from 'react-redux'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";

import {getSongInformation, getSongImage} from '../store/actions/index.js'
import {parse, stringify, toJSON, fromJSON} from 'flatted';


function SingleSongs({ song, index, img, album }) {

  const [liked, setLiked] = useState(false)

  const fetchLikes = (likedSong) => {
    likedSong.album = album
    delete likedSong.album.album
    delete likedSong.album.tracks
    delete likedSong.album.artist
    
    console.log(JSON.stringify(likedSong))
    
    const url = 'http://localhost:3001/likes'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(likedSong)
      
    })
    .then((response) => {
      console.log(response)
      return response.json()})
    .then(
      console.log('liked')
    )
    
    
  }

  const dispatch = useDispatch()


  useEffect(() => {

  }, [liked])
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
            {
              liked ? (<i class="bi bi-heart-fill liked mr-5" onClick={()=>{
                setLiked(false)
              
              }} ></i>):(<i class="bi bi-heart unliked mr-5" onClick={()=>{
                // console.log(JSON.stringify(song))
                fetchLikes(song)
                setLiked(true)

              }} ></i>)
            }
            
            
            <p className="views">2:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SingleSongs;