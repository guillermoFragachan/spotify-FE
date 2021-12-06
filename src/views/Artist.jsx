import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Artist = () => {
  const [artistInfo, setArtistInfo] = useState(null);

  const params = useParams();

  console.log(params)

  const fetchArtistInfo = async (params) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${params}`
      );

      if (response.ok) {
        const data = await response.json();
        setArtistInfo(data);
        console.log(data)
      } else {
        console.log("error fetching artist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const topFiveSongs = async () => {
    try {

      const response = await fetch(`https://api.deezer.com/artist/119/top?limit=1`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "54af5d148emsh7c584bbc4786506p1619efjsn5c4304c1b056"
        }
      })

      if(response.ok) {
        const data = await response.json();
        console.log(data)
      } else {
        console.log("error fetching top five songs")
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArtistInfo(params.artistId);
    topFiveSongs()
  }, []);


  

  return (
    artistInfo ? (
      <div className="music-container">
      <section id="navbar" style={{backgroundImage: `url(${artistInfo.picture_xl})`}}>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-svideo-dark">
            <div className="nav-item active">
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
          <div className="jumbotron jumbotron-fluid">
            <div style={{ margin: 35, marginTop: 146 }}>
              <span>
                <i className="bi bi-patch-check-fill" />
                Verified Artist
              </span>
              <span >
                <h1 className="header">{artistInfo.name}</h1>
              </span>
              <p className="lead">{artistInfo.nb_fan} Followers</p>
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
              <button id="follow-button">FOLLOWING</button>
              <a
                className="btn nav-btn "
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                <i className="bi bi-three-dots tr-dots" />
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
            <div className="padding-content">
              <div className="d-flex justify-content-end">
                <h1 className="title-section" style={{ width: 1035 }}>
                  Popular
                </h1>
                <h1
                  className="title-section d-none d-md-none d-lg-none d-xl-block"
                  style={{ width: 487 }}
                >
                  Artist Pick
                </h1>
              </div>
              <div className="row d-flex">
                <div className="col-12 col-md-12 col-lg-12 col-xl-7">
                  <div className="col-12 d-flex flex-column mb-0 background-list">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="d-flex">
                          <div className="d-flex my-auto m-0">
                            <h1 className="views">1</h1>
                          </div>
                          <img className="artist-pic" src="./img/juice 2.jpg" />
                          <div className="d-flex flex-column">
                            <p className="line-breaker">
                              some random text to show
                            </p>
                            <span className="explicit-content">E</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <p className="views">642,364,286</p>
                      </div>
                      <div className="d-flex">
                        <div className="d-flex flex-row">
                          <img className="unliked" src="./img/heart-64.svg" />
                          <p className="views">2:30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex flex-column mb-0 background-list">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="d-flex">
                          <div className="d-flex my-auto m-0">
                            <h1 className="views">2</h1>
                          </div>
                          <img className="artist-pic" src="./img/juice 2.jpg" />
                          <div className="d-flex flex-column">
                            <p className="line-breaker">
                              some random text to show
                            </p>
                            <span className="explicit-content">E</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <p className="views">642,364,286</p>
                      </div>
                      <div className="d-flex">
                        <div className="d-flex flex-row">
                          <img className="unliked" src="./img/heart-64.svg" />
                          <p className="views">2:30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex flex-column mb-0 background-list">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="d-flex">
                          <div className="d-flex my-auto m-0">
                            <h1 className="views">3</h1>
                          </div>
                          <img className="artist-pic" src="./img/juice 2.jpg" />
                          <div className="d-flex flex-column">
                            <p className="line-breaker">
                              some random text to show
                            </p>
                            <span className="explicit-content">E</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <p className="views">642,364,286</p>
                      </div>
                      <div className="d-flex">
                        <div className="d-flex flex-row">
                          <img className="unliked" src="./img/heart-64.svg" />
                          <p className="views">2:30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex flex-column mb-0 background-list">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="d-flex">
                          <div className="d-flex my-auto m-0">
                            <h1 className="views">4</h1>
                          </div>
                          <img className="artist-pic" src="./img/juice 2.jpg" />
                          <div className="d-flex flex-column">
                            <p className="line-breaker">
                              some random text to show
                            </p>
                            <span className="explicit-content">E</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <p className="views">642,364,286</p>
                      </div>
                      <div className="d-flex">
                        <div className="d-flex flex-row">
                          <img className="unliked" src="./img/heart-64.svg" />
                          <p className="views">2:30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex flex-column mb-0 background-list">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="d-flex">
                          <div className="d-flex my-auto m-0">
                            <h1 className="views">5</h1>
                          </div>
                          <img className="artist-pic" src="./img/juice 2.jpg" />
                          <div className="d-flex flex-column">
                            <p className="line-breaker">
                              some random text to show
                            </p>
                            <span className="explicit-content">E</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <p className="views">642,364,286</p>
                      </div>
                      <div className="d-flex">
                        <div className="d-flex flex-row">
                          <img className="unliked" src="./img/heart-64.svg" />
                          <p className="views">2:30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-none d-md-none d-lg-none d-xl-block offset-1 col-4 ">
                  <div className="d-flex">
                    <div>
                      <img
                        className="artist-pick"
                        src={artistInfo.picture_medium}
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <div>
                        <img
                          className="artist-small-pic"
                          src={artistInfo.picture_small}
                        />
                        <span className="artist-name">Posted by an Artist</span>
                      </div>
                      <div>
                        <a className="name-tag" href="#">
                          {artistInfo.name}
                        </a>
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 400,
                          letterSpacing: "normal",
                          lineHeight: 16,
                          textTransform: "none",
                          marginTop: 5,
                        }}
                      >
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href>
                <h1 className="see-more" style={{ marginBottom: 20 }}>
                  SEE MORE
                </h1>
              </a>
              <h1
                className="title-section d-xl-none"
                style={{ width: 400, paddingLeft: 15 }}
              >
                Artist Pick
              </h1>
              <div className="col-12 d-xl-none">
                <div className="d-flex">
                  <div>
                    <img className="artist-pick" src="./img/trippie red.jpg" />
                  </div>
                  <div className="d-flex flex-column">
                    <div>
                      <img
                        className="artist-small-pic"
                        src="./img/juice 2.jpg"
                      />
                      <span className="artist-name">Posted by an Artist</span>
                    </div>
                    <div>
                      <a className="name-tag" href="#">
                        NAME OF THE ARTIST
                      </a>
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        letterSpacing: "normal",
                        lineHeight: 16,
                        textTransform: "none",
                        marginTop: 5,
                      }}
                    >
                      Playlist
                    </div>
                  </div>
                </div>
              </div>
              <section id="second-section">
                <div
                  className="container-fluid p-0"
                  style={{ marginBottom: 64 }}
                >
                  <div className="d-flex justify-content-between mt-3">
                    <h4 style={{ width: "bold" }}>Recently played</h4>
                    <p>
                      <span className="text-muted"> SEE All</span>
                    </p>
                  </div>
                  <div className="row py-1 d-flex">
                    <div className="col-2 h-100">
                      <div className="card">
                        <img
                          src="./img/artist-img/curtis6.jpg"
                          className="card-img-top"
                          alt="img-fluid"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Burning Jazz-rock</h5>
                          <p className="dotted">
                            you'll find fiery, modern,groovy, jazz-rock
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 h-100">
                      <div className="card">
                        <img
                          src="./img/artist-img/abba2.jpg"
                          className="card-img-top"
                          alt="img-fluid"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Burning Jazz-rock</h5>
                          <p className="dotted">
                            you'll find fiery, modern,groovy, jazz-rock
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 h-100">
                      <div className="card">
                        <img
                          src="./img/artist-img/george3.jpg"
                          className="card-img-top"
                          alt="img-fluid"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Burning Jazz-rock</h5>
                          <p className="dotted">
                            you'll find fiery, modern,groovy, jazz-rock
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 h-100">
                      <div className="card">
                        <img
                          src="./img/artist-img/the5.jpg"
                          className="card-img-top"
                          alt="img-fluid"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Burning Jazz-rock</h5>
                          <p className="dotted">
                            you'll find fiery, modern,groovy, jazz-rock
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 h-100">
                      <div className="card">
                        <img
                          src="./img/artist-img/the4.jpg"
                          className="card-img-top"
                          alt="img-fluid"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Burning Jazz-rock</h5>
                          <p className="dotted">
                            you'll find fiery, modern,groovy, jazz-rock
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 h-100">
                      <div className="card">
                        <img
                          src="./img/artist-img/janis7.jpg"
                          className="card-img-top"
                          alt="img-fluid"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Burning Jazz-rock</h5>
                          <p className="dotted">
                            you'll find fiery, modern,groovy, jazz-rock
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
    ) : (

      <div>Loader...</div>

    )
  );
};

export default Artist;
