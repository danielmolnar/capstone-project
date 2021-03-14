import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

function ImageContainer({ isLarge, movie }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <>
      <MovieContainer netflixStyle={isLarge}>
        <ImageStyler
          netflixStyle={isLarge}
          key={movie.id}
          src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
          alt={movie.name}
        />
        <Overlay></Overlay>
        {/*Add to Watchlist icon will be placed in Overlay*/}
      </MovieContainer>
    </>
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
        transform: scale(1.09);
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

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  opacity: 0;
  top: 0;
  font-size: 20px;
  padding: 5px;
  text-align: center;
  transition: 450ms;
`;
