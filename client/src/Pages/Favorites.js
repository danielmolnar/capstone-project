import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MovieContext } from '../Store';
import ImageContainer from '../components/ImageContainer';

export default function Favorites({
  isLarge,
  movie,
  addToFavorites,
  isFavorite,
  addToWatchList,
  isOnWatchList,
}) {
  const [checkWatchlist, setCheckWatchlist] = useContext(MovieContext);

  function toggleButton(movie) {
    addToWatchList(movie);
    setCheckWatchlist(!checkWatchlist);
  }

  function toggleWatchList(movie) {
    setCheckWatchlist(isOnWatchList(movie));
  }

  return (
    <FlexWrapper>
      <ImageContainer
        isLarge={isLarge}
        movie={movie}
        addToFavorites={addToFavorites}
        isFavorite={isFavorite}
        addToWatchList={() => toggleButton(movie)}
        isOnWatchList={() => toggleWatchList(movie)}
      />
    </FlexWrapper>
  );
}

Favorites.propTypes = {
  isLarge: PropTypes.bool,
  movie: PropTypes.object,
  addToWatchList: PropTypes.func,
  isOnWatchList: PropTypes.func,
};

const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
