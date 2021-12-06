import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

const SideBar = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="aside-bar">
      <div className=" position-aside">
        <div>
          <img
            src="/img/logo.png"
            id="logo-spotify"
            className="img-fluid"
            onClick={() => navigate("/")}
          />

          <div
            className={
              pathname === "/"
                ? `d-flex align-items-center justify-content-start section-selected-style section-selected-style-active`
                : "d-flex align-items-center justify-content-start section-selected-style"
            }
            onClick={() => navigate("/")}
          >
            <i className="bi bi-house-door-fill icons-color-size" />

            <p className="section-side">Home</p>
          </div>
        </div>
        <div>
          <div
            className={
              pathname === "/search"
                ? `d-flex align-items-center justify-content-start section-selected-style section-selected-style-active`
                : "d-flex align-items-center justify-content-start section-selected-style"
            }
            onClick={() => navigate("/search")}
          >
            <i className="bi bi-search icons-color-size" />

            <p className="section-side">Search</p>
          </div>
        </div>
        <div>
          <div
            className={
              pathname === "/library/albums"
                ? `d-flex align-items-center justify-content-start section-selected-style section-selected-style-active`
                : "d-flex align-items-center justify-content-start section-selected-style"
            }
            onClick={() => navigate("/library/albums")}
          >
            <i className="bi bi-music-note-list icons-color-size" />
            <p className="section-side">Your Library</p>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-start section-selected-style-list-bottom">
            <i className="bi bi-plus-square-fill icons-color-size" />
            <p className="section-side">Create Playlist</p>
          </div>
        </div>
        <div>
          <div
            className={
              pathname === "/liked"
                ? `d-flex align-items-center justify-content-start section-selected-style section-selected-style-active`
                : "d-flex align-items-center justify-content-start section-selected-style"
            }
            onClick={() => navigate("/liked")}
          >
            <i className="bi bi-heart-fill icons-color-size" />
            <p className="section-side">Liked Songs</p>
          </div>
        </div>
        <hr className="hr-styled" />

        <ul id="scrollable-section">
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
          <a href>
            <li>Random Playlist</li>
          </a>
        </ul>
        <div className="d-flex align-items-baseline">
          <a href>
            <i
              className="bi bi-download icons-color-size"
              style={{ marginLeft: 30 }}
            />
          </a>
          <a href>
            <p className="text-download" style={{ marginLeft: 20 }}>
              Install App
            </p>
          </a>
        </div>
      </div>
      {children}
    </div>
  );
};

export default SideBar;
