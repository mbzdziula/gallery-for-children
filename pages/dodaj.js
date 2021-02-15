import React from 'react';
import MainNavbar from '../src/components/MainNavbar';
import MainFooter from '../src/components/MainFooter';
import AddForm from '../src/components/AddForm';

export default function Dodaj() {
  return (
    <div className="bg-secondary d-flex flex-column next-body">
      <MainNavbar />

      <main className="container bg-light d-flex flex-column mb-auto flex-grow-1">
        <AddForm />
      </main>
      <MainFooter />
    </div>
  );
}
