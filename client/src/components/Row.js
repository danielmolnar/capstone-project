import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageContainer from './ImageContainer';

function Row({ title, fetchUrl, isLarge, addToWatchList, isWatchList }) {
  const [movies, setMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      const myMovies = request.data.results.map((item) => ({
        id: item.id,
        title: item.name || item.title || item.original_name,
        poster: item?.poster_path,
        backdrop: item?.backdrop_path,
        alt: item.name || item.title || item.original_name,
        score: item.vote_average,
        // text: item.overview,
        release: item.first_air_date,
        onWatchList: false,
      }));
      setNewMovies(myMovies);
      setMovies(request.data.results);
      return request;
    }

    fetchMovies();
  }, [fetchUrl]);

  // console.log(movies);
  return (
    <Wrapper>
      <h2>{title}</h2>
      <MovieWrapper>
        {movies.map((movie) => (
          <ImageContainer
            testOnWatchlist={movies.adult}
            isWatchList={isWatchList}
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
