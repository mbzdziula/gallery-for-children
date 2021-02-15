import React from 'react';
import MainNavbar from '../src/components/MainNavbar';
import SimpleCard from '../src/components/SimpleCard';
import MainFooter from '../src/components/MainFooter';

export default function Home() {
  return (
    <div className="bg-secondary d-flex flex-column next-body">
      <MainNavbar />

      <main className="container bg-light d-flex flex-column mb-auto flex-grow-1">
        <SimpleCard />
      </main>
      <MainFooter />
    </div>
  );
}
