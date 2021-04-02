import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeartActiveButton from './Ui/Button/HeartActiveButton';
import HeartInactiveButton from './Ui/Button/HeartInactiveButton';
import InfoButton from './Ui/Button/InfoButton';

export default function OpenButton({
  movie,
  isFavorite,
  clickHandler,
  addToFavorites,
}) {
  const favoriteCheck = isFavorite(movie);

  return (
    <IconWrapper>
      <InfoButton clickHandler={clickHandler} color="white" />
      {favoriteCheck ? (
        <HeartActiveButton addToFavorites={addToFavorites} color="white" />
      ) : (
        <HeartInactiveButton addToFavorites={addToFavorites} color="white" />
      )}
    </IconWrapper>
  );
}

OpenButton.propTypes = {
  movie: PropTypes.object,
  isFavorite: PropTypes.func,
  clickHandler: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-100-opacity);
  margin-bottom: 0.5rem;
  position: relative;
  width: 100%;
`;
