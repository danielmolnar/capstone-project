import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from '../services/axios';
import ImageContainer from './ImageContainer';
import Spinner from '../components/Spinner';
import { MovieContext } from '../Store';

function Row({ title, fetchUrl, isLarge, addToWatchList, isOnWatchList }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [checkWatchlist, setCheckWatchlist] = useContext(MovieContext);

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

  function toggleButton(movie) {
    addToWatchList(movie);
    setCheckWatchlist(!checkWatchlist);
  }

  function toggleWatchList(movie) {
    setCheckWatchlist(isOnWatchList(movie));
  }

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
              isLoading={isLoading}
              key={movie.id}
              movie={movie}
              isLarge={isLarge}
              addToWatchList={() => toggleButton(movie)}
              isOnWatchList={() => toggleWatchList(movie)}
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
  fetchUrl: PropTypes.string,
  isLarge: PropTypes.bool,
  addToWatchList: PropTypes.func,
  isOnWatchList: PropTypes.func,
};

const Wrapper = styled.div`
  margin-left: 20px;
`;

const MovieWrapper = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  margin-right: 15px;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const HeadLineStyler = styled.h2`
  margin-left: 20px;
`;
