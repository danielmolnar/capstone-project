import React from 'react';
import Row from '../components/Row';
import requests from '../services/requests';

function Home({ addToWatchList, isWatchList }) {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
      />
      <Row
        title="TRENDING"
        fetchUrl={requests.fetchTrending}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
      />
      <Row
        title="TOP RATED"
        fetchUrl={requests.fetchTopRated}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
      />
      <Row
        title="ACTION"
        fetchUrl={requests.fetchActionMovies}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
      />
      <Row
        title="COMEDY"
        fetchUrl={requests.fetchComedyMovies}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
      />
      <Row
        title="HORROR"
        fetchUrl={requests.fetchHorrorMovies}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
      />
      <Row
        title="ROMANCE"
        fetchUrl={requests.fetchRomanceMovies}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
      />
      <Row
        title="DOCUMENTARIES"
        fetchUrl={requests.fetchDocumentaries}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
      />
    </>
  );
}

export default Home;
