import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import styled, { css } from 'styled-components';

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
          <ImageContainer netflixStyle={isNetflix}>
            <ImageStyler
              netflixStyle={isNetflix}
              key={movie.id}
              src={`${baseUrl}${
                isNetflix ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <Overlay></Overlay>
            {/*Add to Watchlist icon will be placed in Overlay*/}
          </ImageContainer>
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

const ImageContainer = styled.div(
  (props) => css`
    position: relative;
    margin-right: 10px;
    transition: transform 450ms;
    width: 100%;
    :hover {
      transform: scale(1.08);
    }
    :hover div {
      opacity: 1;
    }
    ${props.netflixStyle &&
    css`
      :hover {
        transform: scale(1.09);
      }
    `}
  `
);

const ImageStyler = styled.img(
  (props) => css`
    max-height: 100px;
    object-fit: contain;
    ${props.netflixStyle &&
    css`
      max-height: 200px;
    `}
  `
);

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  opacity: 0;
  top: 0;
  font-size: 20px;
  padding: 5px;
  text-align: center;
  transition: 450ms;
`;
