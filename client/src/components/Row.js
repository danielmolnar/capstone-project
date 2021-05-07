import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ImageContainer from './ImageContainer';
import { RightArrow } from '@styled-icons/boxicons-regular/RightArrow';
import { LeftArrow } from '@styled-icons/boxicons-regular/LeftArrow';
import { isMobile } from 'react-device-detect';

function Row({
  title,
  isLarge,
  fetchUrl,
  isFavorite,
  hasNoPages,
  isOnWatchList,
  addToFavorites,
  addToWatchList,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      try {
        const request = await axios.get(fetchUrl, {
          params: {
            page: page,
          },
        });
        setMovies(request.data.results);
        setIsLoading(false);
        return request;
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchMovies();
  }, [fetchUrl, page]);

  return (
    <>
      <HeadLineStyler data-testid="headline">{title}</HeadLineStyler>
      <Wrapper data-testid="row">
        <MovieWrapper>
          <ArrowContainer isLoading={isLoading}>
            <BackArrow
              isFirstPage={page === 1}
              onClick={() => setPage((prevPage) => prevPage - 1)}
            />
          </ArrowContainer>
          {movies?.map((movie) => (
            <MarginContainer key={movie.id} isMobile={isMobile}>
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
          <ArrowContainer isLoading={isLoading}>
            <NextArrow
              onClick={() => setPage((prevPage) => prevPage + 1)}
              showNext={movies.length >= 20 && !hasNoPages}
            />
          </ArrowContainer>
        </MovieWrapper>
      </Wrapper>
    </>
  );
}

export default Row;

Row.propTypes = {
  title: PropTypes.string,
  isLarge: PropTypes.bool,
  fetchUrl: PropTypes.string,
  hasNoPages: PropTypes.bool,
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const HeadLineStyler = styled.h2`
  margin-left: 20px;
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

const ArrowContainer = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'none' : 'flex')};
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;
const MarginContainer = styled.div`
  margin-right: ${({ isMobile }) => (isMobile ? '15px' : '22.5px')};
`;

const BackArrow = styled(LeftArrow)`
  color: var(--secondary-100);
  cursor: pointer;
  height: 30px;
  transition: transform 450ms;
  visibility: ${({ isFirstPage }) => (isFirstPage ? 'hidden' : 'visible')};
  width: 30px;
  &:hover {
    transform: scale(1.2);
  }
`;

const NextArrow = styled(RightArrow)`
  color: var(--secondary-100);
  cursor: pointer;
  height: 30px;
  transition: transform 450ms;
  visibility: ${({ showNext }) => (showNext ? 'visible' : 'hidden')};
  width: 30px;
  &:hover {
    transform: scale(1.2);
  }
`;
