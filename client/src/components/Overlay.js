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
  const checkOnWatchList = isOnWatchList(movie);

  return (
    <OverlayStyler>
      <ButtonWrapper>
        <OverlayMenu
          movie={movie}
          isFavorite={isFavorite}
          addToFavorites={addToFavorites}
          clickHandler={() => setIsOpen(true)}
        />
      </ButtonWrapper>
      <CardInfos
        movie={movie}
        open={isOpen}
        addToWatchList={addToWatchList}
        onClose={() => setIsOpen(false)}
        checkOnWatchList={checkOnWatchList}
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
  position: absolute;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  bottom: 10px;
  position: absolute;
  width: 100%;
`;
