import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heart } from '@styled-icons/evaicons-solid/Heart';
import { HeartOutline } from '@styled-icons/evaicons-outline/HeartOutline';

export default function FavoriteButton({ movie, isFavorite, addToFavorites }) {
  const favoriteCheck = isFavorite(movie);

  return !favoriteCheck ? (
    <HeartBackGround>
      <HeartInactive onClick={addToFavorites} />
    </HeartBackGround>
  ) : (
    <HeartBackGround>
      <HeartActive onClick={addToFavorites} />
    </HeartBackGround>
  );
}

FavoriteButton.propTypes = {
  movie: PropTypes.object,
  isFavorite: PropTypes.bool,
  addToFavorites: PropTypes.func,
};

const HeartBackGround = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: solid white 1px;
  height: 25px;
  width: 25px;
  /* background-color: var(--primary-100); */
`;

const HeartInactive = styled(HeartOutline)`
  color: white;
  cursor: pointer;
  font-weight: bold;
  height: 20px;
  transition: transform 250ms;
  width: 20px;

  :hover {
    color: var(--primary-100);
  }
`;

const HeartActive = styled(Heart)`
  color: var(--primary-100);
  cursor: pointer;
  font-weight: bold;
  height: 20px;
  width: 20px;
`;
