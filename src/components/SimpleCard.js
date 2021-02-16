import React from 'react';
import { Image } from 'cloudinary-react';

function SimpleCard({ element }) {
  const date = element.CreatedAt;
  const newDate = new Date(date.replace(' ', 'T'));
  // const toDay = new Date();
  // const days = ((Date.parse(toDay) - Date.parse(newDate))/(60*60*24*1000));

  const month = new Array();
  month[0] = 'Styczeń';
  month[1] = 'Luty';
  month[2] = 'Marzec';
  month[3] = 'Kwiecień';
  month[4] = 'Maj';
  month[5] = 'Czerwiec';
  month[6] = 'Lipiec';
  month[7] = 'Sierpień';
  month[8] = 'Wrzesień';
  month[9] = 'Październik';
  month[10] = 'Listopad';
  month[11] = 'Grudzień';
  const newMonth = month[newDate.getMonth()];

  return (
    <div className="card my-4 mx-5 shadow">
      <Image
        cloudName="mbzdziula"
        publicId={element.id_image}
        width="1024"
        crop="scale"
        className="card-img"
      />
      <div className="card-body text-center">
        <h5 className="card-title">{element.title}</h5>
        <h6 className="card-subtitle fw-normal">Autor: {element.autor}</h6>
        <p className="card-text fw-light">{element.description}</p>
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
          <span className="col-4 text-center">
            Dodano: {newDate.getDate()} {newMonth} {newDate.getFullYear()}
          </span>
          <span className="col-8">
            Tagi:
            <span className="text-muted"> {element.tag}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SimpleCard;
