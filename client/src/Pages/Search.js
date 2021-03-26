import PropTypes from 'prop-types';
import styled from 'styled-components';
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

Search.propTypes = {
  movie: PropTypes.object,
  isLarge: PropTypes.bool,
  isLoading: PropTypes.bool,
  isFavorite: PropTypes.bool,
  isOnWatchList: PropTypes.bool,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
