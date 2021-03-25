import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HeartOutline } from '@styled-icons/evaicons-outline/HeartOutline';
import { Heart } from '@styled-icons/evaicons-solid/Heart';

export default function Button({ addToFavorites, isFavorite, movie }) {
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

Button.propTypes = {
  clickHandler: PropTypes.func,
};

const HeartBackGround = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  /* background-color: var(--primary-100); */
  border: solid white 1px;
`;

const HeartInactive = styled(HeartOutline)`
  color: white;
  width: 20px;
  height: 20px;
  transition: transform 250ms;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: var(--primary-100);
  }
`;

const HeartActive = styled(Heart)`
  color: var(--primary-100);
  width: 20px;
  height: 20px;
  font-weight: bold;
  cursor: pointer;
`;
