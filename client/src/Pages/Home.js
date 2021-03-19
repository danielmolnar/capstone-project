import React from 'react';
import Row from '../components/Row';
import requests from '../services/requests';

function Home({ addToWatchList, isWatchList, isOnWatchList }) {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
        isOnWatchlist={isOnWatchList}
      />
      <Row
        title="TRENDING"
        fetchUrl={requests.fetchTrending}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
        isOnWatchlist={isOnWatchList}
      />
      <Row
        title="TOP RATED"
        fetchUrl={requests.fetchTopRated}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
        isOnWatchlist={isOnWatchList}
      />
      <Row
        title="ACTION"
        fetchUrl={requests.fetchActionMovies}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
        isOnWatchlist={isOnWatchList}
      />
      <Row
        title="COMEDY"
        fetchUrl={requests.fetchComedyMovies}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
        isOnWatchlist={isOnWatchList}
      />
      <Row
        title="HORROR"
        fetchUrl={requests.fetchHorrorMovies}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
        isOnWatchlist={isOnWatchList}
      />
      <Row
        title="ROMANCE"
        fetchUrl={requests.fetchRomanceMovies}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
        isOnWatchlist={isOnWatchList}
      />
      <Row
        title="DOCUMENTARIES"
        fetchUrl={requests.fetchDocumentaries}
        addToWatchList={addToWatchList}
        isWatchList={isWatchList}
        isOnWatchlist={isOnWatchList}
      />
    </>
  );
}

export default Home;
