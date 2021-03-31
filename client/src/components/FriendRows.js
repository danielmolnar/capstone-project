import ImageContainer from '../components/ImageContainer';
import styled from 'styled-components';

export default function FriendRows({
  isLarge,
  movie,
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
