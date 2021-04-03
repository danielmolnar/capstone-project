import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import flixbuddies_poster from '../images/flixbuddies_poster.png';
import backdrop_poster from '../images/backdrop_poster.png';

function Poster({ movie, isLarge }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  let existingPath = movie.poster_path === null && movie.backdrop_path === null;

  return existingPath ? (
    <>
      <Title>{movie?.name || movie?.title || movie?.original_name}</Title>
      <ImageStyler
        netflixStyle={isLarge}
        src={isLarge ? flixbuddies_poster : backdrop_poster}
        alt={movie?.name || movie?.title || movie?.original_name}
      />
    </>
  ) : (
    <ImageStyler
      netflixStyle={isLarge}
      key={movie.id}
      src={`${baseUrl}${
        isLarge
          ? movie?.poster_path
          : movie?.backdrop_path || movie?.poster_path
      }`}
      alt={movie?.name || movie?.title || movie?.original_name}
    />
  );
}

export default Poster;

Poster.propTyes = {
  movie: PropTypes.object,
  isLarge: PropTypes.bool,
};

const Title = styled.p`
  padding: 5px;
  text-align: center;
`;

const ImageStyler = styled.img(
  (props) => css`
    max-height: 100px;
    object-fit: contain;
    ${props.netflixStyle &&
      css`
        max-height: 200px;
        max-width: 134px;
      `}
  `
);
