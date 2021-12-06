import React from "react";
import SingleSongs from "./SingleSongs";

function Songs() {
  return (
    <div className="padding-content">
      <div className="row d-flex">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
          <div className="col-12 d-flex flex-column mb-0">
            <div className="d-flex justify-content-between">
              <span className="text-muted"># TITLE</span>

              <i class="bi bi-clock text-muted"></i>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row d-flex">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
          
          
          <SingleSongs />
          
          
        </div>
      </div>
    </div>
  );
}

export default Songs;
