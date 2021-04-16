import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { PermDeviceInformation } from '@styled-icons/material/PermDeviceInformation';
import requests from '../services/requests';
import Row from '../components/Row';

function Home({ isFavorite, isOnWatchList, addToWatchList, addToFavorites }) {
  const [desktopInfo, setDesktopInfo] = useState(false);

  return (
    <Wrapper>
      <>
        <InfoContainer desktopInfo={desktopInfo} isMobile={isMobile}>
          <p>
            Use "shift" + "mousewheel" in order to scroll through the movies
            horizontally
          </p>
          <span onClick={() => setDesktopInfo(!desktopInfo)}>
            <InfoIcon />
          </span>
        </InfoContainer>
      </>
      <Row
        isLarge
        data-testid="netflix"
        title="NETFLIX ORIGINALS"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchNetflixOriginals}
      />

      <Row
        title="TRENDING"
        data-testid="trending"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchTrending}
        hasNoPages
      />

      <Row
        title="TOP RATED"
        data-testid="top-rated"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchTopRated}
      />

      <Row
        title="ACTION"
        data-testid="action"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchActionMovies}
      />

      <Row
        title="ADVENTURES"
        data-testid="adventures"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchAdventures}
      />

      <Row
        title="COMEDY"
        data-testid="comedy"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchComedyMovies}
      />

      <Row
        title="Crime"
        data-testid="crime"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchCrimeMovies}
      />

      <Row
        title="DOCUMENTARIES"
        isFavorite={isFavorite}
        data-testid="documentaries"
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchDocumentaries}
      />

      <Row
        title="DRAMA"
        data-testid="drama"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchDramas}
      />

      <Row
        title="FANTASY"
        data-testid="fantasy"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchFantasy}
      />

      <Row
        title="HORROR"
        data-testid="horror"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchHorrorMovies}
      />

      <Row
        title="MUSIC"
        data-testid="music"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchMusic}
      />

      <Row
        title="SCIENCE FICTION"
        isFavorite={isFavorite}
        data-testid="science-fiction"
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchScienceFiction}
      />

      <Row
        title="Thriller"
        data-testid="thriller"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchThriller}
      />
    </Wrapper>
  );
}

Home.propTypes = {
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1020px;
`;

const InfoContainer = styled.div`
  display: ${({ isMobile }) => (isMobile ? 'none' : 'flex')};
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 1020px;
  span {
    cursor: pointer;
  }
  p {
    visibility: ${({ desktopInfo }) => (desktopInfo ? '' : 'hidden')};
    font-size: 1rem;
  }
`;

const InfoIcon = styled(PermDeviceInformation)`
  color: var(--secondary-100);
  height: 30px;
  width: 30px;
  margin: 0 20px;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.25);
  }
`;

export default Home;
