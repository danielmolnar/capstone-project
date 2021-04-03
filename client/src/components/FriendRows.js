import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageContainer from '../components/ImageContainer';

export default function FriendRows({
  movie,
  isLarge,
  isFavorite,
  isOnWatchList,
  addToWatchList,
  addToFavorites,
}) {
  return (
    <Wrapper>
      <MovieWrapper>
        <ImageContainer
          movie={movie}
          isLarge={isLarge}
          isFavorite={isFavorite}
          isOnWatchList={isOnWatchList}
          addToWatchList={addToWatchList}
          addToFavorites={addToFavorites}
        />
      </MovieWrapper>
    </Wrapper>
  );
}

FriendRows.propTypes = {
  movie: PropTypes.object,
  isLarge: PropTypes.bool,
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const Wrapper = styled.div`
  margin-left: 25px;
`;

const MovieWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 20px;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
