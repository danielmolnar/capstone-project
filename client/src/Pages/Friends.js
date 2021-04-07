import PropTypes from 'prop-types';
import styled from 'styled-components';
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
    <MarginContainer>
      <ImageContainer
        movie={movie}
        isLarge={isLarge}
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
      />
    </MarginContainer>
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

const MarginContainer = styled.div`
  margin-right: 15px;
`;
