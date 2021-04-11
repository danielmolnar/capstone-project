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
        title="NETFLIX ORIGINALS"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchNetflixOriginals}
      />

      <Row
        title="TRENDING"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchTrending}
      />

      <Row
        title="TOP RATED"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchTopRated}
      />

      <Row
        title="ACTION"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchActionMovies}
        page="1"
      />

      <Row
        title="ADVENTURES"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchAdventures}
        page="2"
      />

      <Row
        title="COMEDY"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchComedyMovies}
      />

      <Row
        title="Crime"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchCrimeMovies}
      />

      <Row
        title="DOCUMENTARIES"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchDocumentaries}
        page="1"
      />

      <Row
        title="DRAMA"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchDramas}
        page="2"
      />

      <Row
        title="FANTASY"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchFantasy}
        page="3"
      />

      <Row
        title="HORROR"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchHorrorMovies}
      />

      <Row
        title="MUSIC"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchMusic}
      />

      <Row
        title="SCIENCE FICTION"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchScienceFiction}
      />

      <Row
        title="Thriller"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchThriller}
        page="2"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1020px;
`;

const InfoContainer = styled.div`
  display: ${({ isMobile }) => (isMobile ? 'none' : 'flex')};
  justify-content: flex-end;
  align-items: center;
  /* margin: 0; */
  width: 100%;
  max-width: 1020px;
  span {
    cursor: pointer;
  }
  p {
    visibility: ${({ desktopInfo }) => (desktopInfo ? '' : 'hidden')};
    font-size: 1rem;
    margin: 0 0 0 20px;
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

Home.propTypes = {
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

export default Home;
