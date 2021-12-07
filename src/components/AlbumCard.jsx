import React from "react";

function AlbumCard() {
  return (
    <div className="col-2 h-100">
      <div className="card">
        <img
          src="./img/artist-img/curtis6.jpg"
          className="card-img-top"
          alt="img-fluid"
        />
        <div className="card-body">
          <h5 className="card-title">Burning Jazz-rock</h5>
          <p className="dotted">you'll find fiery, modern,groovy, jazz-rock</p>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;