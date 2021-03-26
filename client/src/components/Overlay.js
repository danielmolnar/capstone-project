import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OpenButton from './OpenButton';
import CardInfos from '../components/CardInfos';

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
      <ButtonWrapper>
        <OpenButton
          clickHandler={() => setIsOpen(true)}
          movie={movie}
          isFavorite={isFavorite}
          addToFavorites={addToFavorites}
        />
      </ButtonWrapper>
      <CardInfos
        open={isOpen}
        movie={movie}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
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
