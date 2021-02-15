import React from 'react';
import { Image } from 'cloudinary-react';

function SimpleCard() {
  return (
    <div className="card mt-5 mx-5">
      <Image
        cloudName="mbzdziula"
        publicId="gallery/rzbmlszqyabh6pqqu7zg"
        width="1024"
        crop="scale"
        className="card-img"
      />
      <div className="card-body text-center">
        <h5 className="card-title">Kwiatki dla mamy</h5>
        <h6 className="card-subtitle fw-normal">Autor: Lena</h6>
        <p className="card-text fw-light">Laurka stworzona dla mamy z okazji dnia mamy</p>
        <div className="d-flex justify-content-center">
          <div className="btn btn-outline-danger card-link d-flex justify-content-center button-like">
            <i className="bi bi-heart-fill me-2"></i>Doskonała
          </div>
          <div className="btn btn-outline-success card-link d-flex justify-content-center button-like">
            <i className="bi bi-hand-thumbs-up-fill me-2"></i>Dobra
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row justify-content-start align-items-center">
          <span className="col-4 text-center">Dodano 4 dni temu</span>
          <span className="col-8">
            Tagi:
            <span className="text-muted">#DlaMamy #DlaTaty #DlaDziadkaAndrzeja #DlaBabciBeaty</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SimpleCard;
