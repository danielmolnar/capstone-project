import React, { useState, useEffect } from 'react';
import axios from './axios';
import styled, { css } from 'styled-components';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isNetflix }) {
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
          <ImageStyler
            netflixStyle={isNetflix}
            key={movie.id}
            src={`${baseUrl}${
              isNetflix ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </CardContainer>
    </RowContainer>
  );
}

export default Row;

const RowContainer = styled.div`
  margin-left: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ImageStyler = styled.img(
  (props) => css`
    max-height: 100px;
    object-fit: contain;
    transition: transform 450ms;
    max-height: 100px;
    width: 100%;
    margin-right: 10px;
    :hover {
      transform: scale(1.08);
    }
    ${props.netflixStyle &&
    css`
      max-height: 200px;
      :hover {
        transform: scale(1.09);
      }
    `}
  `
);
