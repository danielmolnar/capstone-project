import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from '../services/axios';
import Spinner from './Ui/Spinner';
import ImageContainer from './ImageContainer';

function Row({
  title,
  isLarge,
  fetchUrl,
  isFavorite,
  isOnWatchList,
  addToWatchList,
  addToFavorites,
}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setIsLoading(false);
      return request;
    }

    fetchMovies();
  }, [fetchUrl]);

  return isLoading ? (
    <>
      <HeadLineStyler>{title}</HeadLineStyler>
      <Spinner isLarge={isLarge} />
    </>
  ) : (
    <>
      <HeadLineStyler>{title}</HeadLineStyler>
      <Wrapper>
        <MovieWrapper>
          {movies.map((movie) => (
            <ImageContainer
              movie={movie}
              key={movie.id}
              isLarge={isLarge}
              isLoading={isLoading}
              isFavorite={() => isFavorite(movie)}
              isOnWatchList={() => isOnWatchList(movie)}
              addToWatchList={() => addToWatchList(movie)}
              addToFavorites={() => addToFavorites(movie)}
            />
          ))}
        </MovieWrapper>
      </Wrapper>
    </>
  );
}

export default Row;

Row.propTypes = {
  title: PropTypes.string,
  isLarge: PropTypes.bool,
  fetchUrl: PropTypes.string,
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const Wrapper = styled.div`
  margin-left: 25px;
`;

const MovieWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 20px;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const HeadLineStyler = styled.h2`
  margin-left: 20px;
`;
