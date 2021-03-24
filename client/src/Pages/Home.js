import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from '../components/Row';
import requests from '../services/requests';

function Home({ addToWatchList, isOnWatchList, open }) {
  return (
    <StyleWrapper open={open}>
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
      <RowWrapper>
        <Row
          title="DOCUMENTARIES"
          fetchUrl={requests.fetchDocumentaries}
          addToWatchList={addToWatchList}
          isOnWatchList={isOnWatchList}
        />
      </RowWrapper>
    </StyleWrapper>
  );
}

Home.propTypes = {
  addToWatchList: PropTypes.func,
  isOnWatchList: PropTypes.func,
};

const StyleWrapper = styled.div`
  transform: ${({ open }) => (open ? 'translateX(20vH)' : 'translateX(0)')};
  transition: transform 0.3s ease-in-out;
  overflow-y: hidden;
  overflow-x: scroll;
`;

const RowWrapper = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;
`;

export default Home;
