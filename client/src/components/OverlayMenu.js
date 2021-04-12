import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeartInactiveButton from './Ui/Button/HeartInactiveButton';
import HeartActiveButton from './Ui/Button/HeartActiveButton';
import InfoButton from './Ui/Button/InfoButton';

export default function OverlayMenu({
  movie,
  isFavorite,
  clickHandler,
  addToFavorites,
}) {
  const favoriteCheck = isFavorite(movie);

  return (
    <IconWrapper>
      {favoriteCheck ? (
        <HeartActiveButton
          addToFavorites={addToFavorites}
          color="var(--secondary-100)"
        />
      ) : (
        <HeartInactiveButton
          addToFavorites={addToFavorites}
          color="var(--secondary-100)"
        />
      )}
      <InfoButton clickHandler={clickHandler} color="var(--secondary-100)" />
    </IconWrapper>
  );
}

OverlayMenu.propTypes = {
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
  box-shadow: var(--boxshadow-light);
  margin-bottom: 0.5rem;
  position: relative;
  width: 100%;
`;
