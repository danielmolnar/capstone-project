import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ImageContainer from './ImageContainer';
import { LeftArrow } from '@styled-icons/boxicons-regular/LeftArrow';
import { RightArrow } from '@styled-icons/boxicons-regular/RightArrow';

function Row({
  title,
  isLarge,
  fetchUrl,
  hasNoPages,
  isFavorite,
  isOnWatchList,
  addToFavorites,
  addToWatchList,
}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  const isFirstPage = page === 1;

  function prevPage() {
    if (!isFirstPage) {
      setPage((prevPage) => prevPage - 1);
    }
  }

  function nextPage() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <>
      <HeadLineStyler data-testid="headline">{title}</HeadLineStyler>
      <Wrapper data-testid="row">
        <MovieWrapper>
          <ArrowContainer isLoading={isLoading}>
            <BackArrow isFirstPage={isFirstPage} onClick={prevPage} />
          </ArrowContainer>
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
          <ArrowContainer isLoading={isLoading}>
            <NextArrow onClick={nextPage} hasNoPages={hasNoPages} />
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

const BackArrow = styled(LeftArrow)`
  visibility: ${({ isFirstPage }) => (isFirstPage ? 'hidden' : 'visible')};
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.2);
  }
`;

const NextArrow = styled(RightArrow)`
  visibility: ${({ hasNoPages }) => (hasNoPages ? 'hidden' : 'visible')};
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.2);
  }
`;

const ArrowContainer = styled.span`
  display: ${({ isLoading }) => (isLoading ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 13px;
`;
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
