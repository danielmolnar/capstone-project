import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageContainer from './ImageContainer';
import Spinner from '../components/Spinner';

function Row({
  title,
  fetchUrl,
  isLarge,
  addToWatchList,
  isWatchList,
  isOnWatchList,
}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const resolvePromise = (request) => {
    setMovies(request.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      resolvePromise(request);
      return request;
    }

    fetchMovies();
  }, [fetchUrl]);

  // console.log(isLoading);
  function logger(movie) {
    // isOnWatchList(movie);
    // console.log(isOnWatchList(movie));
    console.log(movie);
  }

  return isLoading ? (
    <>
      <HeadLinerStyler>{title}</HeadLinerStyler>
      <Spinner isNetflix={isLarge} />
    </>
  ) : (
    <>
      <HeadLinerStyler>{title}</HeadLinerStyler>
      <Wrapper>
        <MovieWrapper>
          {movies.map((movie) => (
            <ImageContainer
              isLoading={isLoading}
              isWatchList={isWatchList}
              key={movie.id}
              isNetflix={isLarge}
              movie={movie}
              isLarge={isLarge}
              isOnWatchlist={() => isOnWatchList(movie)}
              addToWatchList={() => addToWatchList(movie)}
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
};

const Wrapper = styled.div`
  margin-left: 20px;
`;

const MovieWrapper = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const HeadLinerStyler = styled.h2`
  margin-left: 20px;
`;
