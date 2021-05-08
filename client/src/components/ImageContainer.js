import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import Poster from '../components/Poster.js';
import Overlay from '../components/Overlay';

function ImageContainer({
  movie,
  isLarge,
  isLoading,
  isFavorite,
  isOnWatchList,
  addToWatchList,
  addToFavorites,
}) {
  return (
    <MovieContainer
      isLarge={isLarge}
      isMobile={isMobile}
      data-testid="movie-container"
    >
      <Poster movie={movie} isLarge={isLarge} isLoading={isLoading} />
      <Overlay
        movie={movie}
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToFavorites={addToFavorites}
        addToWatchList={addToWatchList}
      />
    </MovieContainer>
  );
}

export default ImageContainer;

ImageContainer.propTypes = {
  movie: PropTypes.object,
  isLarge: PropTypes.bool,
  isMobile: PropTypes.bool,
  isLoading: PropTypes.bool,
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const MovieContainer = styled.div`
  max-height: ${({ isMobile }) => (isMobile ? '200px' : '300px')};
  position: relative;
  transition: transform 450ms;
  :hover {
    transform: ${({ isLarge }) => (isLarge ? 'scale(1.1)' : 'scale(1.08)')};
  }
  :hover div {
    opacity: 1;
  }
`;
