import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'


const PlayerBar = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const songInformation = useSelector(state=> state.songInformation)
  const songImage = useSelector(state=> state.songImage)
  const songPlaying = useSelector(state=> state.songPlaying)
  const refs = useRef()


  const handleCurrentTimeChange = (e) => {
    const { currentTime, duration } = refs.current;
    const progress = (currentTime / duration) * 100;
   
      setProgress(progress);
    
  }

  const handleVolumeChange = (e) => {
    const newVolume = e; 
    console.log(newVolume)
    refs.current.volume = newVolume/100;
    setVolume(newVolume);
  }
  

  useEffect(() => {
    if (songPlaying) {
      refs.current.play();
      setIsPlaying(true);
    } else {
      refs.current.pause();
      setIsPlaying(false);
    }
  } , [songPlaying])
 
 useEffect(() => {} , [refs.current, volume])

  useEffect(() => {
  setTimeout(() => {handleCurrentTimeChange()},100)
   
    
  }, [ isPlaying, progress])
  return (
    <div className="left-fixed">
   <nav
     className="navbar navbar-expand-lg navbar-dark background-spotify"
     style={{ height: "100%", position: "sticky", bottom: 0 }}
   >
     <a className="navbar-brand" href="#">
       <img src={songImage} className={songInformation ? "music-selected" : " noDisplay"} />
     </a>
     <a href className={songInformation ? "upper-title" : " noDisplay"}>
       {" "}
       {songInformation?.title}<br /> <span>{songInformation?.artist.name}</span>
     </a>
     <i className="bi bi-plus-circle icon-bottom-nav" />
     <i className="bi bi-pip icon-bottom-nav" />
     <div
       className="collapse navbar-collapse d-flex flex-column"
       id="navbarSupportedContent"
     >
       <ul className="navbar-nav m-auto d-flex flex-column">
         <div className="play-buttons m-auto">
           <i className="bi bi-skip-start-fill icons-color-size-before" />
           {
             isPlaying ? (
              <i className={"bi bi-pause-fill icons-color-size" } onClick={()=>{
                setIsPlaying(false)
                refs.current.pause()
                console.log('paused')

              }}/>
             ):(
              <i className={"bi bi-play-fill icons-color-size"} onClick={()=>{
                setIsPlaying(true)
                refs.current.play()
                

              }} />
             )
           }
           <i className="bi bi-skip-end-fill icons-color-size-before" />
         </div>
         <div className="d-flex align-items-center justify-content-center">
           { refs.current?.duration? <span className="durationTimeSong">0:0{Math.floor(refs.current.currentTime)}</span>:<span className="durationTimeSong">0:00</span> }
         <div className="slidecontainer1 ">
           {
             refs.current ? (
              <input
              type="range"
              min={1}
              max={100}
              defaultValue={0}
              value={progress}
              onChange={(e) => {
                setProgress(e.target.value);
                refs.current.currentTime = (e.target.value / 100) * refs.current.duration;
              }}
              className="slider1"
              id="myRange"
            />
             ):(
              <input
              type="range"
              min={1}
              max={100}
              value={0}
              className="slider1"
              id="myRange"
            />
             )
           }
         </div>
        { refs.current?.duration? <span className="durationTimeSong">0:0{Math.floor(refs.current.duration)}</span>:<span className="durationTimeSong">0:00</span> }

         </div>
       </ul>
     </div>
     <div className="form-inline my-2 my-lg-0">
       <a href>
         <i className="bi bi-music-note-list icon-bottom-nav" />
       </a>
       <a href>
         <i className="bi bi-speaker icon-bottom-nav" />
       </a>
       <a href>
         {
            volume===0 ? (<i class="bi bi-volume-mute icon-bottom-nav-audio" onClick={()=>setVolume(0.5)}/>):(<i className="bi bi-volume-down icon-bottom-nav-audio"  onClick={()=>setVolume(0)} />)
         }
       </a>
       <div className="slidecontainer">
       
         <input
           type="range"
           min={1}
           max={100}
           className="slider"
           value={volume}
           onChange={(e) => {handleVolumeChange(e.target.value)} }
           id="myRange"
         />
       </div>
     </div>
   </nav>
   <audio
        ref={refs}
        src={songInformation?.preview}
      />
 </div> 
  );
};

export default PlayerBar;