/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function Pagination({ page, count, name }) {
  const paginationCount = new Array(count);
  for (let i = 0; i < paginationCount.length; i++) {
    paginationCount[i] = i + 1;
  }
  return (
    <div className="row mx-sm-4 mx-2 mt-2">
      <div className="d-flex justify-content-between mb-2">
        <Link href={`/${name}/${page - 1}`}>
          <a
            className={`btn btn-primary text-light flex-grow-1 me-1 ${
              page === 1 ? 'disabled' : ''
            }`}
          >
            Wcześniejsza
          </a>
        </Link>
        <Link href={`/${name}/${page + 1}`}>
          <a
            className={`btn btn-primary text-light flex-grow-1 ms-1 ${
              page === count ? 'disabled' : ''
            }`}
          >
            Następna
          </a>
        </Link>
      </div>
      <nav className="d-flex">
        <ul className="pagination">
          {paginationCount.map((e) => (
            <li key={e} className={`page-item ${page === e ? 'active' : ''}`}>
              <Link href={`/${name}/${e}`}>
                <a className={`page-link`}>{e}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Pagination;
