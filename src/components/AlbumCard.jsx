import React from "react";
import { useNavigate } from "react-router-dom";

function AlbumCard({ song }) {
  const navigation = useNavigate();

  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-2"
      onClick={() => navigation("/album/" + song.id)}
    >
      <div className="card card-album-artistpage">
        <img src={song.cover_medium} className="card-img-top" alt="img-fluid" />

        <h5 className="card-title">{song.title}</h5>
      </div>
    </div>
  );
}

export default AlbumCard;