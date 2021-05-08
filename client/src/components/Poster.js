import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import styled, { css } from 'styled-components';
import flixbuddies_poster from '../assets/flixbuddies_poster.webp';
import backdrop_poster from '../assets/backdrop_poster.webp';
import spinner from '../assets/LoadingSpinner.webp';

function Poster({ movie, isLarge, isLoading }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  const noPath = movie?.poster_path === null && movie?.backdrop_path === null;
  const noPosterPath =
    movie?.poster_path === null && movie?.backdrop_path != null;
  const noBackdropPath =
    movie?.poster_path != null && movie?.backdrop_path === null;

  return isLoading ? (
    <ImageStyler
      isMobile={isMobile}
      netflixStyle={isLarge}
      src={spinner}
      alt={movie?.name || movie?.title || movie?.original_name}
    />
  ) : isLarge && noPosterPath ? (
    <>
      <Title>{movie?.name || movie?.title || movie?.original_name}</Title>
      <ImageStyler
        isMobile={isMobile}
        netflixStyle={isLarge}
        key={movie?.id}
        src={flixbuddies_poster}
        alt={movie?.name || movie?.title || movie?.original_name}
      />
    </>
  ) : !isLarge && noBackdropPath ? (
    <>
      <Title>{movie?.name || movie?.title || movie?.original_name}</Title>
      <ImageStyler
        isMobile={isMobile}
        netflixStyle={isLarge}
        key={movie?.id}
        src={backdrop_poster}
        alt={movie?.name || movie?.title || movie?.original_name}
      />
    </>
  ) : noPath ? (
    <>
      <Title>{movie?.name || movie?.title || movie?.original_name}</Title>
      <ImageStyler
        isMobile={isMobile}
        netflixStyle={isLarge}
        key={movie?.id}
        src={isLarge ? flixbuddies_poster : backdrop_poster}
        alt={movie?.name || movie?.title || movie?.original_name}
      />
    </>
  ) : (
    <ImageStyler
      isMobile={isMobile}
      netflixStyle={isLarge}
      key={movie?.id}
      src={`${baseUrl}${isLarge ? movie?.poster_path : movie?.backdrop_path}`}
      alt={movie?.name || movie?.title || movie?.original_name}
    />
  );
}

export default Poster;

Poster.propTyes = {
  movie: PropTypes.object,
  isLarge: PropTypes.bool,
  isMobile: PropTypes.bool,
  isLoading: PropTypes.bool,
};

const Title = styled.p`
  font-size: 0.9rem;
  margin: 0 auto;
  padding: 5px;
  position: absolute;
`;

const ImageStyler = styled.img(
  (props) => css`
    max-height: ${({ isMobile }) => (isMobile ? '100px' : '150px')};
    object-fit: contain;
    ${props.netflixStyle &&
      css`
        max-height: ${({ isMobile }) => (isMobile ? '200px' : '300px')};
        max-width: ${({ isMobile }) => (isMobile ? '134px' : '201px')};
      `}
  `
);
