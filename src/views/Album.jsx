import React from "react";
import AlbumTopInfo from "../components/AlbumTopInfo";
import Songs from "../components/Songs";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function Album() {
  const params = useParams().albumId;
  const navigate = useNavigate();
  const [albumSongs, setAlbumSongs] = useState([]);
  const [artistInfo, setArtistInfo] = useState({});
  const [albumInfo, setAlbumInfo] = useState(null);

  const fetchAlbumSongs = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${params}`
      );
      if (response.ok) {
        const data = await response.json();
        setAlbumInfo(data);
        setArtistInfo(data.artist);
        setAlbumSongs(data.tracks.data);
        console.log(albumInfo.cover_small, "fetchalbum")
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbumSongs();
  }, []);

  return (
    albumInfo? (
      <div className="music-container">
        <div className="w-100">
          <div className="container-fluid p-0">
            <nav
              id="jumbo-navbar"
              className="navbar navbar-expand-lg navbar-dark"
            >
              <div className="nav-item active" style={{ color: "white" }}>
                <i className="bi bi-chevron-left" />
              </div>
              <div className="nav-item text-muted ml-3">
                <i className="bi bi-chevron-right" />
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
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
                      <span className="d-inline-block">
                        Diego 'Ziba' Balack
                      </span>
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
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
          </div>
        </div>
        <section id="navbar">
          <div className="container-fluid p-0">
            <div className="container-fluid p-0">
              <div className="jumbotron-album">
                <div className="row" id="photo-of-artist">
                  <AlbumTopInfo
                    albumInfo={albumInfo}
                    artistInfo={artistInfo}
                    length={albumSongs.length}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="main-content-album">
            <div>
              <div className="buttons-row">
                <div className="play-button">
                  <div className="play">
                    <i className="bi bi-play-fill" />
                  </div>
                </div>
                <svg
                  className="liked"
                  width={40}
                  height={40}
                  viewBox="0 0 150 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M125.784 35.0369C113.039 22.2916 92.9859 21.3682 79.1227 32.8994C79.1062 32.9135 77.318 34.3807 75 34.3807C72.6234 34.3807 70.9266 32.9416 70.8609 32.8853C57.0141 21.3682 36.9609 22.2916 24.2156 35.0369C17.6695 41.583 14.0625 50.2877 14.0625 59.5478C14.0625 68.808 17.6695 77.5127 24.0914 83.9228L64.3078 131.006C66.9844 134.14 70.882 135.938 75 135.938C79.1203 135.938 83.0156 134.14 85.6922 131.009L125.782 84.0611C139.301 70.5447 139.301 48.5533 125.784 35.0369ZM122.346 80.8807L82.1297 127.964C80.3461 130.05 77.7469 131.25 75 131.25C72.2531 131.25 69.6562 130.053 67.8703 127.964L27.532 80.7447C21.8695 75.0822 18.75 67.5541 18.75 59.5478C18.75 51.5392 21.8695 44.0135 27.5297 38.351C33.3961 32.4822 41.0555 29.5127 48.7336 29.5127C55.4742 29.5127 62.2289 31.8025 67.7977 36.4338C68.0977 36.7033 70.8586 39.0682 75 39.0682C79.0266 39.0682 81.8578 36.7314 82.1367 36.49C94.1109 26.5291 111.45 27.3307 122.47 38.351C134.159 50.0393 134.159 69.0564 122.346 80.8807Z"
                    fill="#535353"
                  />
                </svg>
                <a
                  className="btn nav-btn"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  <i className="bi bi-three-dots tr-dots" />
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
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
            <div className="padding-content">
              <div className="row d-flex">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="col-12 d-flex flex-column mb-0">
                    <div className="d-flex justify-content-between header-album">
                      <span className="text-muted"># TITLE</span>

                      <i class="bi bi-clock text-muted"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="header-album" />
            </div>
            {
             albumSongs.map((song, index) => {
               return <Songs song={song} index={index} img={albumInfo.cover_small}/>
             })
            }
          </div>
        </section>
      </div>
    ) : (
      <Loader />
    )
  );
}



export default Album;