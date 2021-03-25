import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Overlay from '../components/Overlay';
import Poster from '../components/Poster.js';

function ImageContainer({
  isLarge,
  movie,
  addToWatchList,
  isOnWatchList,
  isFavorite,
  addToFavorites,
}) {
  return (
    <MovieContainer isLarge={isLarge}>
      <Poster isLarge={isLarge} movie={movie} />
      <Overlay
        isFavorite={isFavorite}
        addToFavorites={addToFavorites}
        movie={movie}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
      />
    </MovieContainer>
  );
}

export default ImageContainer;

ImageContainer.propTypes = {
  isLarge: PropTypes.bool,
  movie: PropTypes.object,
  addToWatchList: PropTypes.func,
  isOnWatchList: PropTypes.func,
};

const MovieContainer = styled.div(
  (props) => css`
    max-height: 200px;
    position: relative;
    margin-right: 15px;
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
