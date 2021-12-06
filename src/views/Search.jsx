import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getLatestSearches } from "../store/actions/index";

function Search() {
  const [search, setSearch] = useState("");

  const [results, setResults] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchResults = async (search) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`
      );
      if (response.ok) {
        const data = await response.json();
        setResults(data.data);
        dispatch(getLatestSearches(data.data[0].artist));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { latestSearches } = useSelector((state) => state);

  return results.length > 0 ? (
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
            <div className="search-bar-container">
              <div className="d-flex align-items-center">
                <i
                  class="bi bi-search search-icon"
                  onClick={() => fetchResults(search)}
                ></i>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Artists , songs"
                  onChange={(e) =>
                    setSearch(e.target.value.toLocaleLowerCase())
                  }
                />
              </div>
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
                    <span className="d-inline-block">Diego 'Ziba' Balack</span>
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
      <div class="main-content-album2">
        <div>
          <div class="padding-content">
            <section id="second-section">
              <div class="container">
                <div class="d-flex justify-content-between mt-5">
                  <h4 style={{ width: "bold" }}>Recently played</h4>
                  <p>
                    <span class="text-muted"> SEE All</span>
                  </p>
                </div>
                <div class="row py-1 d-flex" id="recently-played">
                  {results.slice(0, 12).map((song, index) => {
                    return (
                      <div
                        className="col-12 col-sm-6 col-md-4 col-lg-2"
                        onClick={() => {
                          navigate(`/album/${song.album.id}`);
                        }}
                      >
                        <div class="card" style={{ marginBottom: "25px" }}>
                          <img
                            src={song.album.cover_medium}
                            class="card-img-top img-fluid"
                          />
                          <div class="card-body">
                            <h5 class="card-title dotted">
                              {song.album.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  ) : (
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
            <div className="search-bar-container">
              <div className="d-flex align-items-center">
                <i
                  class="bi bi-search search-icon"
                  onClick={() => fetchResults(search)}
                ></i>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Artists , songs"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value.toLocaleLowerCase())
                  }
                />
              </div>
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
                    <span className="d-inline-block">Diego 'Ziba' Balack</span>
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
      <div class="main-content-album2">
        <div>
          <div class="padding-content">
            <section id="second-section">
              <div class="container">
                <div class="d-flex justify-content-between mt-5">
                  <h4 style={{ width: "bold" }}>Recently played</h4>
                  <p>
                    <span class="text-muted"> SEE All</span>
                  </p>
                </div>
                <div class="row py-1 d-flex" id="recently-played">
                  Search Something
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
