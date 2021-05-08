import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import ImageContainer from '../components/ImageContainer';
import Spinner from '../components/Spinner';

export default function Friends({
  movie,
  isLarge,
  isFavorite,
  isOnWatchList,
  addToWatchList,
  addToFavorites,
  isLoadingFriends,
}) {
  return isLoadingFriends ? (
    <Spinner />
  ) : (
    <MarginContainer isMobile={isMobile}>
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
  margin-right: ${({ isMobile }) => (isMobile ? '15px' : '22.5px')};
`;
