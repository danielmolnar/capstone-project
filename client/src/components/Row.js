import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ImageContainer from './ImageContainer';
import Spinner from './Spinner';

function Row({
  page,
  title,
  isLarge,
  fetchUrl,
  isFavorite,
  isOnWatchList,
  addToFavorites,
  addToWatchList,
}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      const request = await axios.get(fetchUrl, {
        params: {
          page: page,
          include_adult: false,
        },
      });
      setMovies(request.data.results);
      setIsLoading(false);
      return request;
    }

    fetchMovies();
  }, [fetchUrl, page]);

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
          {movies?.map((movie) => (
            <MarginContainer key={movie.id}>
              <ImageContainer
                movie={movie}
                key={movie?.id}
                isLarge={isLarge}
                isLoading={isLoading}
                isFavorite={() => isFavorite(movie)}
                isOnWatchList={() => isOnWatchList(movie)}
                addToWatchList={() => addToWatchList(movie)}
                addToFavorites={() => addToFavorites(movie)}
              />
            </MarginContainer>
          ))}
        </MovieWrapper>
      </Wrapper>
    </>
  );
}

export default Row;

Row.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string,
  isLarge: PropTypes.bool,
  fetchUrl: PropTypes.string,
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const MarginContainer = styled.div`
  margin-right: 15px;
`;

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
