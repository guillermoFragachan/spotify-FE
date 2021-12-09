import React from "react";
import NavigationLibrary from "../components/NavigationLibrary";
import Playlist from "../svg/Playlist.svg"
import PlaceHolder from "../components/PlaceHolder"

function LibraryPlaylist() {
  return (
    <div className="like-container">
      <section id="navbar">
        <div className="container-fluid">
          <NavigationLibrary />
          <div>
            <div className="padding-content">
              <section id="second-section">
                <div
                  className="container-fluid p-0"
                  style={{ marginBottom: 64 }}
                >
                  <div className="d-flex justify-content-between mt-3">
                    <h4 style={{ width: "bold" }}>Playlist</h4>
                  </div>
                  <div className="row py-1 d-flex"></div>
                </div>
              </section>
              {
                <PlaceHolder
                  svg={Playlist}
                  title={"Create your first playlist"}
                  height={"80vh"}
                  description={"It's easy, we'll help you."}
                  button={"CREATE PLAYLIST"}
                />
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LibraryPlaylist;
