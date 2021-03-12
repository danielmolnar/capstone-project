import React, { useState, useEffect } from 'react';
import axios from './axios';
import styled from 'styled-components';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <RowContainer>
      <h2>{title}</h2>

      <CardContainer>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </CardContainer>
    </RowContainer>
  );
}

export default Row;

const RowContainer = styled.div``;

const CardContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  ::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 100%;
    object-fit: contain;
    max-height: 100px;
    transition: transform 450ms;
    margin-right: 10px;

    :hover {
      transform: scale(1.08);
    }
  }
`;
