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
  isLarge: PropTypes.bool,
  movie: PropTypes.object,
  addToFavorites: PropTypes.func,
  isFavorite: PropTypes.bool,
  addToWatchList: PropTypes.func,
  isOnWatchList: PropTypes.func,
};

const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
