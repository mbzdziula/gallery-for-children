import React, { useState, useRef } from 'react';
import axios from 'axios';

function AddForm() {
  const [image, setImage] = useState('');
  const imageInputRef = useRef();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');

  const handleChangeTitle = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    console.log(title);
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'gallery-for-children');

    await axios
      .post('https://api.cloudinary.com/v1_1/mbzdziula/image/upload', data)
      .then((response) => {
        console.log(response);
      });
    imageInputRef.current.value = '';
  };
  return (
    <div className="row justify-content-center my-4">
      <h2 className="mb-3 text-center">Dodaj nową laurkę do galerii</h2>
      <form className="col-md-12 col-lg-8">
        <div className="row mx-2 my-4">
          <label htmlFor="title" className="form-label">
            Tytuł laurki <span className="text-muted fst-italic">(wymagane)</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            maxLength="80"
            required
            onChange={handleChangeTitle}
          />
        </div>
        <div className="row mx-2 my-4">
          <label htmlFor="subtitle" className="form-label">
            Autor <span className="text-muted fst-italic">(wymagane)</span>
          </label>
          <select className="form-select" required>
            <option value="" disabled selected>
              Wybierz jedną z opcji
            </option>

            <option value="1">Lena</option>
            <option value="2">Iga</option>
            <option value="3">Praca wspólna</option>
          </select>
        </div>
        <div className="row mx-2 my-4">
          <label htmlFor="inputImg" className="form-label">
            Dodaj zdjęcie laurki <span className="text-muted fst-italic">(wymagane)</span>
          </label>
          <input
            type="file"
            className="form-control"
            id="inputImg"
            aria-label="Upload"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
            ref={imageInputRef}
            required
          />
        </div>
        <div className="row mx-2 my-4">
          <label htmlFor="description" className="form-label">
            Opis
          </label>
          <textarea className="form-control" id="description" rows="3" maxLength="1000"></textarea>
        </div>
        <div className="row mx-2 my-4">
          <label htmlFor="tag" className="form-label">
            Tagi
          </label>
          <textarea className="form-control" id="tag" rows="2" maxLength="200"></textarea>
        </div>
        <div className="row mx-2 my-5">
          <button className="btn btn-danger btn-lg" type="submit" id="inputGroupFileAddon04">
            Dodaj
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
