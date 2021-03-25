import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageContainer from '../components/ImageContainer';
import Spinner from '../components/Spinner';

export default function Search({
  isLarge,
  movie,
  addToWatchList,
  isOnWatchList,
  isLoading,
  isFavorite,
  addToFavorites,
}) {
  return isLoading ? (
    <Spinner />
  ) : (
    <FlexWrapper>
      <ImageContainer
        isLarge={isLarge}
        movie={movie}
        addToWatchList={() => addToWatchList(movie)}
        isOnWatchList={() => isOnWatchList(movie)}
        addToFavorites={addToFavorites}
        isFavorite={isFavorite}
      />
    </FlexWrapper>
  );
}

Search.propTypes = {
  isLarge: PropTypes.bool,
  movie: PropTypes.object,
  addToWatchList: PropTypes.func,
  isOnWatchList: PropTypes.func,
  isLoading: PropTypes.bool,
};

const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
