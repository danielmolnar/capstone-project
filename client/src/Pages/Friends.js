import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageContainer from '../components/ImageContainer';
import Spinner from '../components/Spinner';

export default function Friends({
  movie,
  isLarge,
  isLoadingFriends,
  isFavorite,
  isOnWatchList,
  addToWatchList,
  addToFavorites,
}) {
  return isLoadingFriends ? (
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
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
  isLoadingFriends: PropTypes.bool,
};

const MarginContainer = styled.div`
  margin-right: 15px;
`;
