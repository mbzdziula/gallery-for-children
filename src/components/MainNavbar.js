/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar, Nav } from 'react-bootstrap-v5';
import PropTypes from 'prop-types';

function MainNavbar({ name }) {
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
              <Link href="/page/1">
                <a className={`nav-link px-2 ${name === 'page' ? 'active' : ''}`}>Główna</a>
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/top/1">
                <a className={`nav-link px-2 ${name === 'top' ? 'active ' : ''}`}>Top</a>
              </Link>
            </li>

            <li className="navbar-item">
              <Link href="/lena/1">
                <a className={`nav-link px-2 ${name === 'lena' ? 'active ' : ''}`}>Lena</a>
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/iga/1">
                <a className={`nav-link px-2 ${name === 'iga' ? 'active ' : ''}`}>Iga</a>
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/dodaj">
                <a className={`nav-link px-2 ${pathname === '/dodaj' ? 'active' : ''}`}>Dodaj</a>
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

MainNavbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MainNavbar;
