import React, { useState, useRef } from 'react';
import axios from 'axios';

function AddForm() {
  const [image, setImage] = useState('');
  const imageInputRef = useRef();
  const titleInputRef = useRef();
  const autorInputRef = useRef();
  const descInputRef = useRef();
  const tagInputRef = useRef();

  const initialState = {
    id_image: '',
    title: '',
    autor: '',
    description: '',
    tag: '',
    great: 0,
    like: 0,
  };

  const [post, setPost] = useState(initialState);

  const handleChange = (event, element) => {
    const newElement = event.target.value;
    const newPost = function () {
      return { ...post, [element]: newElement };
    };
    setPost(newPost);
    console.log(post);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'gallery-for-children');
    const res = await axios.post('https://api.cloudinary.com/v1_1/mbzdziula/image/upload', data);
    const newIdImage = res.data.public_id;
    const newPost = post;
    newPost.id_image = newIdImage;

    await axios.post('http://localhost:3000/api/gallery', newPost);
    imageInputRef.current.value = '';
    titleInputRef.current.value = '';
    autorInputRef.current.value = '';
    descInputRef.current.value = '';
    tagInputRef.current.value = '';
  };

  return (
    <div className="row justify-content-center my-4">
      <h2 className="mb-3 text-center">Dodaj nową laurkę do galerii</h2>
      <form className="col-md-12 col-lg-8" onSubmit={handleSubmit}>
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
            onChange={(event) => handleChange(event, 'title')}
            ref={titleInputRef}
          />
        </div>
        <div className="row mx-2 my-4">
          <label htmlFor="autor" className="form-label">
            Autor <span className="text-muted fst-italic">(wymagane)</span>
          </label>
          <select
            className="form-select"
            id="autor"
            required
            onBlur={(event) => handleChange(event, 'autor')}
            ref={autorInputRef}
            defaultValue=""
          >
            <option value="" disabled>
              Wybierz jedną z opcji
            </option>

            <option value="Lena">Lena</option>
            <option value="Iga">Iga</option>
            <option value="Praca wspólna">Praca wspólna</option>
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
          <textarea
            className="form-control"
            id="description"
            rows="3"
            maxLength="1000"
            onChange={(event) => handleChange(event, 'description')}
            ref={descInputRef}
          ></textarea>
        </div>
        <div className="row mx-2 my-4">
          <label htmlFor="tag" className="form-label">
            Tagi
          </label>
          <textarea
            className="form-control"
            id="tag"
            rows="2"
            maxLength="200"
            onChange={(event) => handleChange(event, 'tag')}
            ref={tagInputRef}
          ></textarea>
        </div>
        <div className="row mx-2 my-5">
          <button
            className="btn btn-primary btn-lg text-light"
            type="submit"
            id="inputGroupFileAddon04"
          >
            Dodaj
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
