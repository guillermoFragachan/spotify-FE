import React from "react";
import SingleSongs from "./SingleSongs";



function Songs({song , index}) {
  return (
    <div className="padding-content">
      <div className="row d-flex">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
          <SingleSongs song={song} index={index} />
        </div>
      </div>
    </div>
  );
}



export default Songs;