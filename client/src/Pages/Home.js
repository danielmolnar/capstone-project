import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from '../components/Row';
import requests from '../services/requests';

function Home({
  open,
  isFavorite,
  isOnWatchList,
  addToWatchList,
  addToFavorites,
}) {
  return (
    <StyleWrapper open={open}>
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
      <RowWrapper>
        <Row
          title="DOCUMENTARIES"
          isFavorite={isFavorite}
          isOnWatchList={isOnWatchList}
          addToWatchList={addToWatchList}
          addToFavorites={addToFavorites}
          fetchUrl={requests.fetchDocumentaries}
        />
      </RowWrapper>
    </StyleWrapper>
  );
}

Home.propTypes = {
  open: PropTypes.bool,
  isFavorite: PropTypes.bool,
  isOnWatchList: PropTypes.bool,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const StyleWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  transform: ${({ open }) => (open ? 'translateX(20vH)' : 'translateX(0)')};
  transition: transform 0.3s ease-in-out;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const RowWrapper = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Home;
