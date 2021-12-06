import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'


const PlayerBar = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const songInformation = useSelector(state=> state.songInformation)
  const songImage = useSelector(state=> state.songImage)
  const refs = useRef()

 
 
  useEffect(() => {
   
    
  }, [ isPlaying])
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
              <i className={"bi bi-skip-start-fill icons-color-size-before" } onClick={()=>{
                setIsPlaying(false)
                refs.current.pause()
                console.log('paused')

              }}/>
             ):(
              <i className={"bi bi-play-circle-fill icons-color-size"} onClick={()=>{
                setIsPlaying(true)
                refs.current.play()

              }} />
             )
           }
           <i className="bi bi-skip-end-fill icons-color-size-before" />
         </div>
         <div className="slidecontainer1">
           <input
             type="range"
             min={1}
             max={100}
             defaultValue={50}
             className="slider1"
             id="myRange"
           />
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
         <i className="bi bi-volume-down icon-bottom-nav-audio" />
       </a>
       <div className="slidecontainer">
       
         <input
           type="range"
           min={1}
           max={100}
           defaultValue={50}
           className="slider"
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