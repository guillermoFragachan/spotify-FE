import React, { useEffect } from "react";
import AlbumCard from "../components/AlbumCard";
import NavigationLibrary from "../components/NavigationLibrary";
import PlaceHolder from "../components/PlaceHolder";

import Album from "../svg/Album.svg";

import { useSelector, useDispatch } from "react-redux";
import { getLikedAlbums } from "../store/actions";

function LibraryAlbums() {
  const { likedAlbums } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLikedAlbums());
  }, []);

  return (
    <div className="music-container">
      <section id="navbar">
        <div className="container-fluid">
          <NavigationLibrary />

          <div>
            <div className="padding-content">
              <section id="second-section">
                {likedAlbums.length > 0 && (
                  <div
                    className="container-fluid p-0"
                    style={{ marginBottom: 64 }}
                  >
                    <div className="d-flex justify-content-between mt-3">
                      <h4 style={{ width: "bold" }}>Albums</h4>
                    </div>
                    <div className="row py-1">
                      {likedAlbums.map((song) => {
                        return <AlbumCard song={song} />;
                      })}
                    </div>
                  </div>
                )}

                {likedAlbums.length === 0 && (
                  <PlaceHolder
                    svg={Album}
                    title={"Follow your first album"}
                    height={"80vh"}
                    description={"Save albums by tapping the heart icon."}
                    button={"FIND ALBUMS"}
                  />
                )}
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LibraryAlbums;
