import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Poster from '../components/Poster.js';
import Overlay from '../components/Overlay';
import { isMobile } from 'react-device-detect';

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
      data-testid="movie-container"
      isMobile={isMobile}
    >
      <Poster isLarge={isLarge} movie={movie} isLoading={isLoading} />
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
  isLoading: PropTypes.bool,
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const MovieContainer = styled.div(
  (props) => css`
    max-height: ${({ isMobile }) => (isMobile ? '200px' : '300px')};
    position: relative;
    transition: transform 450ms;

    :hover {
      transform: scale(1.08);
    }
    :hover div {
      opacity: 1;
    }
    ${props.isLarge &&
      css`
        :hover {
          transform: scale(1.1);
        }
      `}
  `
);
