import React from "react";

function SingleSongs() {
  return (
    <div className="col-12 d-flex flex-column mb-0 background-list">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div className="d-flex">
            <div className="d-flex my-auto m-0">
              <h1 className="views">1</h1>
            </div>
            <img className="artist-pic" src="./img/juice 2.jpg" />
            <div className="d-flex flex-column">
              <p className="line-breaker">some random text to show</p>
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
  );
}

export default SingleSongs;