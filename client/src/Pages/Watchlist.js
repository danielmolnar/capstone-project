import PropTypes from 'prop-types';
import ImageContainer from '../components/ImageContainer';

export default function Watchlist({
  movie,
  isLarge,
  isFavorite,
  isOnWatchList,
  addToWatchList,
  addToFavorites,
}) {
  return (
    <ImageContainer
      movie={movie}
      isLarge={isLarge}
      isFavorite={isFavorite}
      isOnWatchList={isOnWatchList}
      addToWatchList={addToWatchList}
      addToFavorites={addToFavorites}
    />
  );
}

Watchlist.propTypes = {
  movie: PropTypes.object,
  isLarge: PropTypes.bool,
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};
