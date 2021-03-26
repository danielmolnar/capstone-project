import PropTypes from 'prop-types';
import styled from 'styled-components';
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
    <FlexWrapper>
      <ImageContainer
        movie={movie}
        isLarge={isLarge}
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
      />
    </FlexWrapper>
  );
}

Watchlist.propTypes = {
  movie: PropTypes.object,
  isLarge: PropTypes.bool,
  isFavorite: PropTypes.bool,
  isOnWatchList: PropTypes.bool,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
