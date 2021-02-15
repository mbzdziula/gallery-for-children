import React, { useState, useRef } from 'react';
import axios from 'axios';

function InputImg() {
  const [image, setImage] = useState('');
  const imageInputRef = useRef();

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
    <div className="input-group">
      <input
        type="file"
        className="form-control"
        id="inputGroupFile04"
        aria-describedby="inputGroupFileAddon04"
        aria-label="Upload"
        onChange={(event) => {
          setImage(event.target.files[0]);
        }}
        ref={imageInputRef}
      />
      <button
        className="btn btn-danger"
        type="button"
        id="inputGroupFileAddon04"
        onClick={uploadImage}
      >
        Dodaj
      </button>
    </div>
  );
}

export default InputImg;
