import PropTypes from 'prop-types';
import Spinner from '../components/Spinner';
import ImageContainer from '../components/ImageContainer';

export default function Search({
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

Search.propTypes = {
  movie: PropTypes.object,
  isLarge: PropTypes.bool,
  isLoading: PropTypes.bool,
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};
