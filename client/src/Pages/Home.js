import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from '../components/Row';
import requests from '../services/requests';

function Home({ isFavorite, isOnWatchList, addToWatchList, addToFavorites }) {
  return (
    <WrapWrapper>
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
        title="HORROR"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchHorrorMovies}
      />

      <Row
        title="DOCUMENTARIES"
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        fetchUrl={requests.fetchDocumentaries}
      />
    </WrapWrapper>
  );
}

const WrapWrapper = styled.div`
  margin: 0 auto;
  max-width: 1920px;
`;

Home.propTypes = {
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

export default Home;
