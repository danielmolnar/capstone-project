import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Poster from '../components/Poster.js';
import Overlay from '../components/Overlay';

function ImageContainer({
  movie,
  isLarge,
  isFavorite,
  isOnWatchList,
  addToWatchList,
  addToFavorites,
}) {
  return (
    <MovieContainer isLarge={isLarge}>
      <Poster isLarge={isLarge} movie={movie} />
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
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const MovieContainer = styled.div(
  (props) => css`
    max-height: 200px;
    position: relative;
    transition: transform 450ms;
    p {
      font-size: 0.7rem;
      position: absolute;
    }
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
