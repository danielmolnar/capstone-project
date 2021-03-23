import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Overlay from '../components/Overlay';
import Spinner from '../components/Spinner';
import NotFound from '../images/not-found.png';
import flixbuddies_poster from '../images/flixbuddies_poster.png';
import backdrop_poster from '../images/backdrop_poster.png';

function ImageContainer({ isLarge, movie, addToWatchList, isOnWatchList }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  const posterCheck = movie.poster_path;
  const backdropCheck = movie.backdrop_path;
  // const check = movie.backdrop_path && movie.poster_path;
  let check;

  if (movie.backdrop_path === null && movie.poster_path === null) {
    check = true;
  } else check = false;

  return check ? (
    <MovieContainer netflixStyle={isLarge}>
      <Test>
        <p>{movie.title}</p>
        <ImageStyler
          netflixStyle={isLarge}
          key={movie.id}
          src={flixbuddies_poster}
          alt={movie?.name || movie?.title || movie?.original_name}
        />
      </Test>
      <Overlay
        check={check}
        movie={movie}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        score={movie.vote_average}
        baseUrl={baseUrl}
        background={backdrop_poster}
        movieText={movie.overview}
        movieName={movie?.name || movie?.title || movie?.original_name}
        release={movie.first_air_date || movie.release_date}
      />
    </MovieContainer>
  ) : (
    <MovieContainer netflixStyle={isLarge}>
      <ImageStyler
        netflixStyle={isLarge}
        key={movie.id}
        src={`${baseUrl}${isLarge ? movie?.poster_path : movie?.backdrop_path}`}
        alt={movie?.name || movie?.title || movie?.original_name}
      />
      <Overlay
        check={check}
        movie={movie}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        score={movie.vote_average}
        baseUrl={baseUrl}
        background={movie?.backdrop_path ?? movie?.poster_path}
        movieText={movie.overview}
        movieName={movie?.name || movie?.title || movie?.original_name}
        release={movie.first_air_date || movie.release_date}
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
    margin-right: 10px;
    transition: transform 450ms;

    p {
      font-size: 0.7rem;
      position: absolute;
    }
    /* width: 100%; */
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

const Test = styled.div`
  display: flex;
  justify-content: center;
`;
