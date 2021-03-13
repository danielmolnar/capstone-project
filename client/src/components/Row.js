import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageContainer from './ImageContainer';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isNetflix }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <Wrapper>
      <h2>{title}</h2>
      <MovieWrapper>
        {movies.map((movie) => (
          <ImageContainer
            key={movie.id}
            baseUrl={baseUrl}
            isNetflix={isNetflix}
            movie={movie}
          />
        ))}
      </MovieWrapper>
    </Wrapper>
  );
}

export default Row;

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
