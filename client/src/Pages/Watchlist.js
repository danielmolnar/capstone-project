import React from 'react';
import PropTypes from 'prop-types';
import ImageContainer from '../components/ImageContainer';

export default function Watchlist({
  isLarge,
  movie,
  addToWatchList,
  isOnWatchList,
}) {
  return (
    <>
      <ImageContainer
        isLarge={isLarge}
        movie={movie}
        addToWatchList={addToWatchList}
        isOnWatchList={isOnWatchList}
      />
    </>
  );
}

Watchlist.propTypes = {
  isLarge: PropTypes.bool,
  movie: PropTypes.object,
  addToWatchList: PropTypes.func,
  isOnWatchList: PropTypes.func,
};
