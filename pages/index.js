import React from 'react';

export default function Home() {
  return (
    <div className="bg-secondary d-flex flex-column ">
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container-fluid justify-content-center">
          <a href="#" className="navbar-brand">
            Galeria Laurek
          </a>
          <ul className="navbar-nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link active bg-danger">
                Główna
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                Poczekalnia
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                Top
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link disabled">
                Dodaj
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container bg-light d-flex flex-column mb-auto">
        <div className="card mt-5 mx-5">
          <img
            src="https://lh3.googleusercontent.com/kExcPSBj8Asw9_CJDVLscZnqfqoavRqE-jMqHW1ZSlNotwwOqLXrXYvSgy6JoT3Bq04BMHOQa2SHfdOni7PHaJckiaWV0hBFeFo1Fyl8oav9HDq_MfzAI3vFx12bbINKWGIi_m0O=w2400"
            className="card-img"
            alt="Laurka dla mamy"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Kwiatki dla mamy</h5>
            <h6 className="card-subtitle fw-normal">Autor: Lena</h6>
            <p className="card-text fw-light">Laurka stworzona dla mamy z okazji dnia mamy</p>
            <div className="d-flex justify-content-center">
              <div className="btn btn-outline-danger card-link d-flex justify-content-center button-like">
                <i class="bi bi-heart-fill me-2"></i>Doskonała
              </div>
              <div className="btn btn-outline-success card-link d-flex justify-content-center button-like">
                <i class="bi bi-hand-thumbs-up-fill me-2"></i>Dobra
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="row justify-content-start align-items-center">
              <span className="col-4 text-center">Dodano 4 dni temu</span>
              <span className="col-8">
                Tagi:
                <span className="text-muted">
                  {' '}
                  #DlaMamy #DlaTaty #DlaDziadkaAndrzeja #DlaBabciBeaty
                </span>
              </span>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer bg-dark py-3 ">
        <div className="container d-flex justify-content-between">
          <span className="fst-italic text-white">
            Strona stworzona dla dwóch códownych córeczek.
          </span>
          <span className="text-muted fw-normal">© 2021 Copyright: Marcin Bździuła</span>
        </div>
      </footer>
    </div>
  );
}
