import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageContainer from './ImageContainer';

function Row({ title, fetchUrl, isLarge, addToWatchList }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchMovies();
  }, [fetchUrl]);

  return (
    <Wrapper>
      <h2>{title}</h2>
      <MovieWrapper>
        {movies.map((movie) => (
          <ImageContainer
            key={movie.id}
            isNetflix={isLarge}
            movie={movie}
            isLarge={isLarge}
            addToWatchList={() => addToWatchList(movie)}
          />
        ))}
      </MovieWrapper>
    </Wrapper>
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
