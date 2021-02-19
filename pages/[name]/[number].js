import React, { useReducer, useEffect, useState } from 'react';
import MainNavbar from '../../src/components/MainNavbar';
import SimpleCard from '../../src/components/SimpleCard';
import MainFooter from '../../src/components/MainFooter';
import axios from 'axios';
import Pagination from '../../src/components/Pagination';
import PropTypes from 'prop-types';

const local_state = 'LOCAL_STATE';
const local_day = 'LOCAL_DAY';

export default function Home({ gallery, page, count, name }) {
  const initialState = { great: [], like: [] };

  function reducer(state, action) {
    switch (action.type) {
      case 'GREAT':
        return { ...state, great: action.payload };
      case 'LIKE':
        return { ...state, like: action.payload };
      case 'INITIAL_STATE':
        return action.payload;
      default:
        return state;
    }
  }

  const [loading, setLoading] = useState(true);
  const [sessionClick, setSessionClick] = useReducer(reducer, initialState);

  useEffect(() => {
    const getInitialState = JSON.parse(localStorage.getItem(local_state));
    const localDate = localStorage.getItem(local_day);
    const date = new Date();
    const day = date.getDate();
    if (getInitialState === null || day != localDate) {
      setLoading(false);
      localStorage.setItem(local_day, day);
    } else {
      setSessionClick({ type: 'INITIAL_STATE', payload: getInitialState });
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }
    localStorage.setItem(local_state, JSON.stringify(sessionClick));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionClick]);

  if (loading) {
    return (
      <div className="bg-secondary d-flex justify-content-center next-body align-items-center">
        <div className="spinner-border mx-2 text-light" role="status" aria-hidden="true"></div>
        <div className="mx-2 text-light">Loading...</div>
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column next-body bg-secondary">
        <MainNavbar name={name} />

        <main className="container bg-light d-flex flex-column flex-grow-1 py-2">
          {gallery.map((element) => (
            <SimpleCard
              key={element.id}
              element={element}
              name={name}
              sessionClick={sessionClick}
              setSessionClick={setSessionClick}
            />
          ))}

          <Pagination page={page} count={count} name={name} />
        </main>

        <MainFooter />
      </div>
    );
  }
}

Home.propTypes = {
  gallery: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export async function getServerSideProps(context) {
  // const initialState = JSON.parse(localStorage.getItem(local_state));
  const name = context.query.name;
  const page = Number(context.query.number);
  const resGallery = await axios.get(
    `https://gallery-for-childern.herokuapp.com/api/${name}/${page}`,
  );
  const gallery = resGallery.data;
  const resCount = await axios.get(`https://gallery-for-childern.herokuapp.com/api/${name}/count`);
  const count = Math.ceil(Number(resCount.data) / 10);
  return { props: { gallery, page, count, name } };
}
