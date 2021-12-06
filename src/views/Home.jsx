import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {

  const navigate = useNavigate();

  const [songs, setSongs] = useState([]);
  const [recentSongs, setRecentSongs] = useState([]);

  const getSongs = (artist) => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" +artist)
    .then((response) => response.json())
      .then((data) => {
        setSongs(data.data);
        // console.log(data.data, 'try')
      })

  }

  const getRecentSongs = (artist) => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+artist)
    .then((response) => response.json())
    .then((data) => {
      setRecentSongs(data.data);
      console.log(data.data, 'try')
    })
  }
  useEffect(() => {
    getSongs("eminem")
    getRecentSongs("metallica")
    
  },[])


  return (
    <div className="music-container">
  <section id="navbar" >
            <div class="container-fluid">
              <section id="album-cards">
                <div class="container">
                  <h2>Good morning</h2>
                  <div class="row py-2" id="good-mor">

                    {
                      songs.slice(0, 6).map((song, index) => (
                         <div className="col-6, col-md-4 ,col-lg-3" onClick={()=>{
                            navigate(`/artist/${song.artist.id}`)
                         }}>
                            <div class="card-top p-0 mb-2">
                          <div class="row no-gutters">
                            <div class="col-md-4">
                              <img
                                src={song.album.cover_medium}
                                class="img-fluid h-100 w-100"
                              />
                            </div>
                            <div
                              class="
                                col-md-8
                                d-flex
                                justify-content-center
                                align-items-center
                              "
                            >
                              <div class="card-body p-0 pl-1">
                                <p class="card-text">
                                  <span>{song.album.title}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                         </div>
                        ))
                      
                    }

                  </div>
                </div>
              </section>
            </div>
            
            <div class="main-content-album2">
              <div>
                <div class="padding-content">
                  <section id="second-section">
                    <div class="container" >
                      <div class="d-flex justify-content-between mt-5">
                        <h4 style={{width: "bold"}}>Recently played</h4>
                        <p><span class="text-muted"> SEE All</span></p>
                      </div>
                      <div class="row py-1 d-flex" id="recently-played">
                      {
                        recentSongs.slice(0, 12).map((song, index) => {
                           
                          return <div className="col-2" onClick={()=>{
                            navigate(`/album/${song.album.id}`)
                          }}>
                          <div class="card" style={{marginBottom:"25px"}}>
                          <img
                            src={song.album.cover_medium}
                            class="card-img-top img-fluid"
                          />
                          <div class="card-body">
                            <h5 class="card-title dotted">{song.album.title}</h5>
                          </div>
                      </div>
                      </div>
                        })
                      }

                      



                      </div>
                    </div>
                  </section>
              
                 
                </div>
              </div>
            </div>
          </section>
</div>

    
  )
};

export default Home;
