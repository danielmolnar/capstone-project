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
        isLarge
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
        isLarge
        title="TOP RATED"
        data-testid="top-rated"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchTopRated}
      />

      <Row
        isLarge
        title="ACTION"
        data-testid="action"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchActionMovies}
      />

      <Row
        isLarge
        title="ADVENTURES"
        data-testid="adventures"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchAdventures}
      />

      <Row
        isLarge
        title="COMEDY"
        data-testid="comedy"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchComedyMovies}
      />

      <Row
        isLarge
        title="Crime"
        data-testid="crime"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchCrimeMovies}
      />

      <Row
        isLarge
        title="DOCUMENTARIES"
        isFavorite={isFavorite}
        data-testid="documentaries"
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchDocumentaries}
      />

      <Row
        isLarge
        title="DRAMA"
        data-testid="drama"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchDramas}
      />

      <Row
        isLarge
        title="FANTASY"
        data-testid="fantasy"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchFantasy}
      />

      <Row
        isLarge
        title="HORROR"
        data-testid="horror"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchHorrorMovies}
      />

      <Row
        isLarge
        title="MUSIC"
        data-testid="music"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchMusic}
      />

      <Row
        isLarge
        title="SCIENCE FICTION"
        isFavorite={isFavorite}
        data-testid="science-fiction"
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchScienceFiction}
      />

      <Row
        isLarge
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
  max-width: 1020px;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: ${({ isMobile }) => (isMobile ? 'none' : 'flex')};
  align-items: center;
  justify-content: flex-end;
  max-width: 1020px;
  width: 100%;
  span {
    cursor: pointer;
  }
  p {
    font-size: 1rem;
    visibility: ${({ desktopInfo }) => (desktopInfo ? '' : 'hidden')};
  }
`;

const InfoIcon = styled(PermDeviceInformation)`
  color: var(--secondary-100);
  height: 30px;
  margin: 0 20px;
  width: 30px;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.25);
  }
`;

export default Home;
