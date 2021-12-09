import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NavigationLibrary() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-svideo-dark" style={{justifyContent: "normal"}}>
      <div
        className={
          pathname === "/library/playlists"
            ? `nav-buttons-lib nav-buttons-lib-active`
            : `nav-buttons-lib`
        }
        onClick={() => navigate("/library/playlists")}
      >
        Playlist
      </div>
      <div
        className={
          pathname === "/library/albums"
            ? `nav-buttons-lib nav-buttons-lib-active`
            : `nav-buttons-lib`
        }
        onClick={() => navigate("/library/albums")}
      >
        Albums
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" />
        <div>
          <div className="dropdown d-inline-block">
            <a
              className="btn nav-btn dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "white" }}
            >
              <img
                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                width={28}
                height={28}
                className="mr-1"
                style={{ borderRadius: "50%" }}
              />
              <span className="d-inline-block">Diego 'Ziba' Balack</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationLibrary;