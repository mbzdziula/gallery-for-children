import React from 'react';
import MainNavbar from '../src/components/MainNavbar';
import SimpleCard from '../src/components/SimpleCard';
import MainFooter from '../src/components/MainFooter';
import axios from 'axios';

export default function Home(props) {
  console.log(props.gallery);
  return (
    <div className="d-flex flex-column next-body bg-secondary">
      <MainNavbar />

      <main className="container bg-light d-flex flex-column flex-grow-1 py-3">
        {props.gallery.map((element) => (
          <SimpleCard key={element.id} element={element} />
        ))}
      </main>
      <MainFooter />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get('http://localhost:3000/api/gallery');
  const gallery = res.data;
  // Pass data to the page via props
  return { props: { gallery } };
}
