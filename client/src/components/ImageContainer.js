import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Overlay from '../components/Overlay';
import Spinner from '../components/Spinner';
// // import Gif from '../images/spinner.gif'

function ImageContainer({
  isLarge,
  movie,
  addToWatchList,
  isWatchList,
  isLoading,
}) {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  // const spinnerSrc = '"../images/spinner.gif"';

  return (
    <MovieContainer netflixStyle={isLarge}>
      <ImageStyler
        netflixStyle={isLarge}
        key={movie.id}
        src={`${baseUrl}${isLarge ? movie?.poster_path : movie?.backdrop_path}`}
        // src="spinner.gif"
        alt={movie.name}
      />
      <Overlay
        isWatchList={isWatchList}
        addToWatchList={addToWatchList}
        score={movie.vote_average}
        baseUrl={baseUrl}
        background={movie?.backdrop_path}
        movieText={movie.overview}
        movieName={movie?.name || movie?.title || movie?.original_name}
        release={movie.first_air_date || movie.release_date}
      />
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
