import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AlbumTopInfo({ albumInfo, artistInfo, length }) {
  
  const navigate = useNavigate();

  const fancyTimeFormat = (duration) => {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
      ret += "" + hrs + " hr " + (mins < 10 ? "0" : "");
    }

    ret += mins + " " + "min"
    return ret;
  }

  return (
    <div className="col-12 d-flex">
      <img
        src={albumInfo.cover_medium}
        className="img-fluid"
        style={{
          height: 232,
          width: 232,
          margin: 30,
          filter: "drop-shadow(30px 10px 4px #0000001f)",
          minWidth: "232px",
        }}
      />
      <div
        className="d-flex flex-column justify-content-end"
        style={{ marginBottom: 30 }}
      >
        <div>
          <h2 style={{ fontSize: 12, color: "white", fontWeight: "bold" }}>
            ALBUM
          </h2>
        </div>
        <div>
          <h1 style={{ color: "white", fontWeight: "bold" }}>
            {albumInfo.title}
          </h1>
        </div>
        <div className="d-flex align-items-center">
          <img
            src={artistInfo.picture_small}
            style={{
              height: 24,
              width: 24,
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: 5,
            }}
          />
          <h2
            style={{
              fontSize: 14,
              color: "white",
              marginBottom: 0,
              fontWeight: "bold",
            }}
            onClick={() => {
              navigate(`/artist/${artistInfo.id}`);
            }}
          >
            {artistInfo.name}
          </h2>
          <span className="text-muted" style={{ fontSize: 14, marginLeft: 5 }}>
            • Followers {albumInfo.fans} • {length} songs , {fancyTimeFormat(albumInfo.duration)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AlbumTopInfo;
