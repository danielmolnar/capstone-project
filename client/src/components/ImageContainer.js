import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Overlay from '../components/Overlay';

function ImageContainer({ isLarge, movie }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <MovieContainer netflixStyle={isLarge}>
      <ImageStyler
        netflixStyle={isLarge}
        key={movie.id}
        src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
      />
      <Overlay movieText={movie.overview} />
    </MovieContainer>
  );
}

export default ImageContainer;

const MovieContainer = styled.div(
  (props) => css`
    position: relative;
    margin-right: 10px;
    transition: transform 450ms;
    width: 100%;
    :hover {
      transform: scale(1.08);
    }
    :hover div {
      opacity: 1;
    }
    ${props.netflixStyle &&
    css`
      :hover {
        transform: scale(1.1);
      }
    `}
  `
);

ImageContainer.propTypes = {
  isLarge: PropTypes.bool,
  movie: PropTypes.object,
  baseUrl: PropTypes.string,
};

const ImageStyler = styled.img(
  (props) => css`
    max-height: 100px;
    object-fit: contain;
    ${props.netflixStyle &&
    css`
      max-height: 200px;
    `}
  `
);
