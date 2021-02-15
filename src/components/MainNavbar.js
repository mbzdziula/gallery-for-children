import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function MainNavbar() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <div className="container-fluid justify-content-center">
        <Link href="/">
          <a className="navbar-brand">Galeria Laurek</a>
        </Link>
        <ul className="navbar-nav nav-pills">
          <li className="nav-item">
            <Link href="/">
              <a className={`nav-link ${pathname === '/' ? 'active bg-danger' : ''}`}>Główna</a>
            </Link>
          </li>
          <li className="navbar-item">
            <a className={`nav-link ${pathname === '/poczekalnia' ? 'active bg-danger' : ''}`}>
              Poczekalnia
            </a>
          </li>
          <li className="navbar-item">
            <a className={`nav-link ${pathname === '/top' ? 'active bg-danger' : ''}`}>Top</a>
          </li>
          <li className="navbar-item">
            <Link href="/dodaj">
              <a className={`nav-link ${pathname === '/dodaj' ? 'active bg-danger' : ''}`}>Dodaj</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavbar;
