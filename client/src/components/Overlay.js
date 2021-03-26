import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../components/Button';
import CardInfos from '../components/CardInfos';
import FavoriteButton from '../components/FavoriteButton.js';

export default function Overlay({
  movie,
  isFavorite,
  isOnWatchList,
  addToWatchList,
  addToFavorites,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OverlayStyler>
      <HeartWrapper>
        <FavoriteButton
          movie={movie}
          isFavorite={isFavorite}
          addToFavorites={addToFavorites}
        />
      </HeartWrapper>
      <ButtonWrapper>
        <Button clickHandler={() => setIsOpen(true)} />
      </ButtonWrapper>
      <CardInfos
        open={isOpen}
        movie={movie}
        isFavorite={isFavorite}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        addToFavorites={addToFavorites}
        onClose={() => setIsOpen(false)}
      />
    </OverlayStyler>
  );
}

Overlay.propTypes = {
  movie: PropTypes.object,
  isFavorite: PropTypes.bool,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const OverlayStyler = styled.div`
  /* display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  bottom: 0;
  height: 100%;
  opacity: 0;
  width: 100%;
  position: absolute;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  /*align-items: center;
  justify-content: center; */
  bottom: 0;
  width: 100%;
  position: absolute;
`;

const HeartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  right: 0;
  top: 0;
  padding: 5px;
  /* flex-direction: column; */
`;
