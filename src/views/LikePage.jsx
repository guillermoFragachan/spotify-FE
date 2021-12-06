import React from "react";







const likePage = (props) => {


    return <div className="music-container">
          <section
            id="navbar"
                     >
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg navbar-dark bg-svideo-dark">
               
              
                
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
                  <img className="likedBox" src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"/>
                  <span>
                    <h1 className="header"></h1>
                  </span>
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
                            
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <div>
                            <img
                              className="artist-small-pic"
                             
                            />
                            <span className="artist-name">Posted by an Artist</span>
                          </div>
                          <div>
                            <a className="name-tag" href="#">
                            
                            
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
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  
                  
                </div>
              </div>
            </div>
          </section>
        </div>
}


export default likePage