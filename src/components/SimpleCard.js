import React, { useState } from 'react';
import { Image } from 'cloudinary-react';
import PropTypes from 'prop-types';
import axios from 'axios';

function SimpleCard({ element, sessionClick, setSessionClick }) {
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

  const [clickedGreat, setClickedGreat] = useState(sessionClick.great.includes(element.id));
  const [clickedLike, setClickedLike] = useState(sessionClick.like.includes(element.id));

  const onClickLike = async () => {
    const newClicked = sessionClick.like.includes(element.id);
    setClickedLike(newClicked);
    // console.log(element.id);

    if (!clickedLike) {
      await axios.patch(`http://localhost:3000/api/action/like/${element.id}`, {
        value: 1,
        score: 1,
      });
      const newSessionClick = sessionClick.like;
      newSessionClick.push(element.id);
      setSessionClick({ type: 'LIKE', payload: newSessionClick });
      setClickedLike(true);
    } else {
      await axios.patch(`http://localhost:3000/api/action/like/${element.id}`, {
        value: -1,
        score: -1,
      });
      console.log(newSessionClick);
      console.log(element.id);

      const newSessionClick = sessionClick.like.filter((e) => e !== element.id);

      setSessionClick({ type: 'LIKE', payload: newSessionClick });
      setClickedLike(false);
      console.log(newSessionClick);
    }
  };

  const onClickGreat = async () => {
    const newClicked = sessionClick.great.includes(element.id);
    setClickedGreat(newClicked);

    if (!clickedGreat) {
      await axios.patch(`http://localhost:3000/api/action/great/${element.id}`, {
        value: 1,
        score: 2,
      });

      const newSessionClick = sessionClick.great;
      newSessionClick.push(element.id);
      setSessionClick({ type: 'GREAT', payload: newSessionClick });
      setClickedGreat(true);
    } else {
      await axios.patch(`http://localhost:3000/api/action/great/${element.id}`, {
        value: -1,
        score: -2,
      });

      const newSessionClick = sessionClick.great.filter((e) => e !== element.id);
      setSessionClick({ type: 'GREAT', payload: newSessionClick });
      setClickedGreat(false);
    }
  };

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
          <button
            type="button"
            className={`btn btn-outline-danger card-link d-flex justify-content-center button-like ${
              clickedGreat ? 'active' : clickedLike ? 'disabled' : ''
            }`}
            onClick={() => onClickGreat()}
          >
            <i className="bi bi-heart-fill me-2"></i>Doskonała
          </button>
          <button
            type="button"
            className={`btn btn-outline-success card-link d-flex justify-content-center button-like ${
              clickedLike ? 'active' : clickedGreat ? 'disabled' : ''
            }`}
            onClick={() => onClickLike()}
          >
            <i className="bi bi-hand-thumbs-up-fill me-2"></i>Dobra
          </button>
        </div>
      </div>
      <div className="card-footer">
        <div className="row justify-content-start align-items-center">
          <span className="col-md-4 text-center">
            Dodano: {newDate.getDate()} {newMonth} {newDate.getFullYear()}
          </span>
          <span className="col-md-8">
            Tagi:
            <span className="text-muted"> {element.tag}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

SimpleCard.propTypes = {
  sessionClick: PropTypes.object.isRequired,
  setSessionClick: PropTypes.func.isRequired,
  element: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default SimpleCard;
