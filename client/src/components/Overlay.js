import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OverlayMenu from '../components/OverlayMenu';
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
        <OverlayMenu
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
  isFavorite: PropTypes.func,
  isOnWatchList: PropTypes.func,
  addToWatchList: PropTypes.func,
  addToFavorites: PropTypes.func,
};

const OverlayStyler = styled.div`
  bottom: 0;
  height: 100%;
  opacity: 0;
  width: 100%;
  position: absolute;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100%;
  position: absolute;
`;
