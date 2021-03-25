import React, { useState } from 'react';
import styled from 'styled-components';
import CardInfos from '../components/CardInfos';
import Button from '../components/Button';
import FavoriteButton from '../components/FavoriteButton.js';
import PropTypes from 'prop-types';

export default function Overlay({
  addToWatchList,
  isOnWatchList,
  movie,
  addToFavorites,
  isFavorite,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OverlayStyler>
      <HeartWrapper>
        <FavoriteButton
          movie={movie}
          addToFavorites={addToFavorites}
          isFavorite={isFavorite}
        />
      </HeartWrapper>
      <ButtonWrapper>
        <Button clickHandler={() => setIsOpen(true)} />
      </ButtonWrapper>
      <CardInfos
        addToFavorites={addToFavorites}
        isFavorite={isFavorite}
        movie={movie}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </OverlayStyler>
  );
}

Overlay.propTypes = {
  addToWatchList: PropTypes.func,
  isOnWatchList: PropTypes.func,
  movie: PropTypes.object,
};

const OverlayStyler = styled.div`
  /* display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  bottom: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  /*align-items: center;
  justify-content: center; */
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const HeartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  top: 0;
  right: 0;
  height: 100%;
  /* flex-direction: column; */
`;
