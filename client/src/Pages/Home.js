import PropTypes from 'prop-types';
import styled from 'styled-components';
import requests from '../services/requests';
import Row from '../components/Row';

function Home({ isFavorite, isOnWatchList, addToWatchList, addToFavorites }) {
  return (
    <Wrapper>
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
        hasNoPages
        title="TRENDING"
        data-testid="trending"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchTrending}
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
  max-width: 1020px;
  width: 100%;
`;

export default Home;
