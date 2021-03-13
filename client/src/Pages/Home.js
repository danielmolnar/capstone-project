import React from 'react';
import Row from '../components/Row';
import requests from '../services/requests';
import PropTypes from 'prop-types';

function Home() {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isNetflix
      />
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Home;

Home.propTypes = {
  requests: PropTypes.string,
  fetchTrending: PropTypes.string,
  fetchTopRated: PropTypes.string,
  fetchActionMovies: PropTypes.string,
  fetchComedyMovies: PropTypes.string,
  fetchHorrorMovies: PropTypes.string,
  fetchRomanceMovies: PropTypes.string,
  fetchDocumentaries: PropTypes.string,
};
