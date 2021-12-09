import React from "react";
import { useNavigate } from "react-router-dom";

function NoLikedSongs({svg , title , description , button, height}) {
  const navigate = useNavigate();
  return (
    <div className="no-like d-flex align-items-center justify-content-center text-center" style={{height: height}}>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img src={svg} alt={button} />
        <h1 className="no-song-h1 mt-3">{title}</h1>
        <span className="no-song-span mt-1">
          {description}
        </span>
        <div className="no-song-btn mt-4" onClick={() => navigate("/search")}>
          {button}
        </div>
      </div>
    </div>
  );
}

export default NoLikedSongs;