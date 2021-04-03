import PropTypes from 'prop-types';
import ImageContainer from '../components/ImageContainer';
import Spinner from '../components/Ui/Spinner';

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

Friends.propTypes = {
  movie: PropTypes.object,
  isLarge: PropTypes.bool,
  isLoading: PropTypes.bool,
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};
