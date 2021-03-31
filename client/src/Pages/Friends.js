import ImageContainer from '../components/ImageContainer';
import Spinner from '../components/Spinner';

export default function Friends({
  movie,
  isLarge,
  isLoading,
  isFavorite,
  isOnWatchList,
  addToWatchList,
  addToFavorites,
}) {
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <ImageContainer
        movie={movie}
        isLarge={isLarge}
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
      />
    </>
  );
}
