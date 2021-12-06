import React from "react";

function AlbumTopInfo() {
  return (
    <div className="col-12 d-flex">
      <img
        src="${body.data[0].album.cover_medium}"
        className="img-fluid"
        style={{
          height: 232,
          width: 232,
          margin: 30,
          filter: "drop-shadow(30px 10px 4px #0000001f)",
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
            ${"{"}body.data[0].album.title{"}"}
          </h1>
        </div>
        <div className="d-flex align-items-center">
          <img
            src="${body.data[0].artist.picture_small}"
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
          >
            ${"{"}body.data[0].artist.name{"}"}
          </h2>
          <span className="text-muted" style={{ fontSize: 14, marginLeft: 5 }}>
            • 2018 • ${"{"}body.data.length{"}"} songs , 1 hr 19 min
          </span>
        </div>
      </div>
    </div>
  );
}

export default AlbumTopInfo;