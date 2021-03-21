import React from 'react';
import Row from '../components/Row';
import requests from '../services/requests';

function Home({ addToWatchList, isOnWatchList }) {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
        addToWatchList={addToWatchList}
        isOnWatchList={isOnWatchList}
      />
      <Row
        title="TRENDING"
        fetchUrl={requests.fetchTrending}
        addToWatchList={addToWatchList}
        isOnWatchList={isOnWatchList}
      />
      <Row
        title="TOP RATED"
        fetchUrl={requests.fetchTopRated}
        addToWatchList={addToWatchList}
        isOnWatchList={isOnWatchList}
      />
      <Row
        title="ACTION"
        fetchUrl={requests.fetchActionMovies}
        addToWatchList={addToWatchList}
        isOnWatchList={isOnWatchList}
      />
      <Row
        title="COMEDY"
        fetchUrl={requests.fetchComedyMovies}
        addToWatchList={addToWatchList}
        isOnWatchList={isOnWatchList}
      />
      <Row
        title="HORROR"
        fetchUrl={requests.fetchHorrorMovies}
        addToWatchList={addToWatchList}
        isOnWatchList={isOnWatchList}
      />
      <Row
        title="ROMANCE"
        fetchUrl={requests.fetchRomanceMovies}
        addToWatchList={addToWatchList}
        isOnWatchList={isOnWatchList}
      />
      <Row
        title="DOCUMENTARIES"
        fetchUrl={requests.fetchDocumentaries}
        addToWatchList={addToWatchList}
        isOnWatchList={isOnWatchList}
      />
    </>
  );
}

export default Home;
