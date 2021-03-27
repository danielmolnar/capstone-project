import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImageContainer from '../components/ImageContainer';

export default function Favorites({
  isLarge,
  movie,
  addToFavorites,
  isFavorite,
  addToWatchList,
  isOnWatchList,
}) {
  return (
    <FlexWrapper>
      <ImageContainer
        isLarge={isLarge}
        movie={movie}
        addToFavorites={addToFavorites}
        isFavorite={isFavorite}
        addToWatchList={addToWatchList}
        isOnWatchList={isOnWatchList}
      />
    </FlexWrapper>
  );
}

Favorites.propTypes = {
  movie: PropTypes.object,
  isLarge: PropTypes.bool,
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
  addToWatchList: PropTypes.func,
};

const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
