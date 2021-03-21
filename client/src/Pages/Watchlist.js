import React from 'react';

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
