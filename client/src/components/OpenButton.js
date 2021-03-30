import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InfoCircle } from '@styled-icons/boxicons-regular/InfoCircle';
import { HeartCircle } from '@styled-icons/boxicons-solid/HeartCircle';
import { HeartCircle as HeartInActive } from '@styled-icons/boxicons-regular/HeartCircle';

export default function OpenButton({
  movie,
  isFavorite,
  clickHandler,
  addToFavorites,
}) {
  const favoriteCheck = isFavorite(movie);

  return (
    <IconWrapper>
      <StyledInfo onClick={clickHandler} />
      {favoriteCheck ? (
        <StyledHeartActive onClick={addToFavorites} />
      ) : (
        <StyledHeartInActive onClick={addToFavorites} />
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

const StyledHeartInActive = styled(HeartInActive)`
  color: white;
  cursor: pointer;
  height: 22.5px;
  width: 22.5px;
`;

const StyledHeartActive = styled(HeartCircle)`
  color: white;
  cursor: pointer;
  height: 22.5px;
  width: 22.5px;
`;

const StyledInfo = styled(InfoCircle)`
  color: white;
  cursor: pointer;
  height: 22.5px;
  width: 22.5px;
  margin-right: 5px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-100-opacity);
  margin-bottom: 0.5rem;
  position: relative;
  width: 100%;
`;