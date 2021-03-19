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

  isOnWatchList,
}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const resolvePromise = (request) => {
  //   setMovies(request.data.results);
  //   setIsLoading(false);
  // };

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setIsLoading(false);
      return request;
    }

    fetchMovies();
  }, [fetchUrl]);

  // console.log(isLoading);
  // function logger(movie) {
  //   console.log(isOnWatchList(movie));
  // }

  // console.log(isOnWatchList);

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
              key={movie.id}
              isNetflix={isLarge}
              movie={movie}
              isLarge={isLarge}
              addToWatchList={() => addToWatchList(movie)}
              isOnWatchList={() => isOnWatchList(movie)}
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
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const HeadLinerStyler = styled.h2`
  margin-left: 20px;
`;
