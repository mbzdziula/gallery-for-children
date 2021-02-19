import React from 'react';
import MainNavbar from '../../src/components/MainNavbar';
import SimpleCard from '../../src/components/SimpleCard';
import MainFooter from '../../src/components/MainFooter';
import axios from 'axios';
import Pagination from '../../src/components/Pagination';
import PropTypes from 'prop-types';

export default function Home({ gallery, page, count, name }) {
  return (
    <div className="d-flex flex-column next-body bg-secondary">
      <MainNavbar name={name} />

      <main className="container bg-light d-flex flex-column flex-grow-1 py-2">
        {gallery.map((element) => (
          <SimpleCard key={element.id} element={element} name={name} />
        ))}

        <Pagination page={page} count={count} name={name} />
      </main>

      <MainFooter />
    </div>
  );
}

Home.propTypes = {
  gallery: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export async function getServerSideProps(context) {
  const name = context.query.name;
  const page = Number(context.query.number);
  const resGallery = await axios.get(`http://localhost:3000/api/${name}/${page}`);
  const gallery = resGallery.data;
  const resCount = await axios.get(`http://localhost:3000/api/${name}/count`);
  const count = Math.ceil(Number(resCount.data) / 10);
  return { props: { gallery, page, count, name } };
}
