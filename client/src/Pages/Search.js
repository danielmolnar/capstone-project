import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ImageContainer from '../components/ImageContainer';
import Spinner from '../components/Spinner';
import { Context } from '../Store';

export default function Search({
  isLarge,
  movie,
  addToWatchList,
  isOnWatchList,
  isLoading,
}) {
  const [checkWatchlist, setCheckWatchlist] = useContext(Context);

  function toggleButton(movie) {
    addToWatchList(movie);
    setCheckWatchlist(!checkWatchlist);
  }

  function toggleWatchList(movie) {
    setCheckWatchlist(isOnWatchList(movie));
  }

  return isLoading ? (
    <>
      <Spinner />
    </>
  ) : (
    <>
      <ImageContainer
        isLarge={isLarge}
        movie={movie}
        addToWatchList={() => toggleButton(movie)}
        isOnWatchList={() => toggleWatchList(movie)}
      />
    </>
  );
}

Search.propTypes = {
  isLarge: PropTypes.bool,
  movie: PropTypes.object,
  addToWatchList: PropTypes.func,
  isOnWatchList: PropTypes.func,
  isLoading: PropTypes.bool,
};
