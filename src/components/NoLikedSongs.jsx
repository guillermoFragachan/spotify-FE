import React from "react";
import { useNavigate } from "react-router-dom";

function NoLikedSongs() {
  const navigate = useNavigate();
  return (
    <div className="no-like d-flex align-items-center justify-content-center">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47 18.538L48 16.806L31.478 7.26801V42.327C29.826 40.299 27.313 39 24.5 39C19.538 39 15.5 43.038 15.5 48C15.5 52.963 19.538 57 24.5 57C29.27 57 33.175 53.266 33.471 48.569L33.478 48.433C33.485 48.288 33.485 47.711 33.478 47.566V10.732L47 18.538ZM31.478 48.434C31.252 52.091 28.213 55 24.5 55C20.64 55 17.5 51.86 17.5 48C17.5 44.141 20.64 41 24.5 41C28.213 41 31.252 43.909 31.478 47.566V48.434Z"
            fill="currentColor"
          ></path>
        </svg>
        <h1 className="no-song-h1">Songs you like will appear here</h1>
        <span className="no-song-span">
          Save songs by tapping the heart icon.
        </span>
        <div className="no-song-btn" onClick={() => navigate("/search")}>
          FIND SONGS
        </div>
      </div>
    </div>
  );
}

export default NoLikedSongs;
