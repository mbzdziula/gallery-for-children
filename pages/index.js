import React from 'react';

export default function Home() {
  return (
    <div className="bg-secondary">
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
      <main className="container bg-light">
        <div className="p-1"></div>
        <div className="card m-5">
          <img
            src="https://polki.pl/foto/1_X_LARGE/laurka-dla-mamy-kwiat-2454312.jpg"
            className="card-img"
            alt="Laurka dla mamy"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Kwiatki dla mamy</h5>
            <h6 className="card-subtitle fw-normal">Autor: Lena</h6>
            <p className="card-text fw-light">Laurka stworzona dla mamy z okazji dnia mamy</p>
            <div className="d-flex justify-content-center">
              <div className="btn btn-outline-success card-link">Tak</div>
              <div className="btn btn-outline-danger card-link">Nie</div>
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
        <div className="card m-5">
          <img
            src="https://polki.pl/foto/1_X_LARGE/laurka-dla-mamy-kwiat-2454312.jpg"
            className="card-img"
            alt="Laurka dla mamy"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Kwiatki dla mamy</h5>
            <h6 className="card-subtitle">Lena</h6>
            <p className="card-text">Laurka stworzona dla mamy z okazji dnia mamy</p>
            <div className="d-flex justify-content-center">
              <div className="btn btn-outline-success card-link">Tak</div>
              <div className="btn btn-outline-danger card-link">Nie</div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-around align-items-center">
            <span>Dodano 4 dni temu</span>
            <span className="text-muted">2020-03-20</span>
          </div>
        </div>
      </main>
    </div>
  );
}
