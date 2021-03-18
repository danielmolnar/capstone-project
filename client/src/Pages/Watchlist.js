import React from 'react';
import ImageContainer from '../components/ImageContainer';

export default function Watchlist({
  isLarge,
  movie,
  addToWatchList,
  isWatchList,
}) {
  return (
    <>
      <ImageContainer
        isWatchList={isWatchList}
        isLarge={isLarge}
        movie={movie}
        addToWatchList={addToWatchList}
      />
    </>
  );
}
