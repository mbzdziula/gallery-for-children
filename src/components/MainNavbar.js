import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar, Nav } from 'react-bootstrap-v5';

function MainNavbar() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Navbar expand="md" className="navbar navbar-dark bg-dark">
      <div className="container d-flex align-items-center">
        <Link href="/">
          <a className="navbar-brand flex-md-grow-1 text-end">Galeria Laurek</a>
        </Link>
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav" className="">
          <Nav variant="pills" className=" d-flex align-items-center">
            <li className="nav-item">
              <Link href="/">
                <a className={`nav-link px-2 ${pathname === '/' ? 'active bg-danger' : ''}`}>
                  Główna
                </a>
              </Link>
            </li>
            <li className="navbar-item">
              <a
                className={`nav-link px-2 ${pathname === '/poczekalnia' ? 'active bg-danger' : ''}`}
              >
                Poczekalnia
              </a>
            </li>
            <li className="navbar-item">
              <a className={`nav-link px-2 ${pathname === '/top' ? 'active bg-danger' : ''}`}>
                Top
              </a>
            </li>
            <li className="navbar-item">
              <Link href="/dodaj">
                <a className={`nav-link px-2 ${pathname === '/dodaj' ? 'active bg-danger' : ''}`}>
                  Dodaj
                </a>
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MainNavbar;
