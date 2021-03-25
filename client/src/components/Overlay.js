import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import CardInfos from '../components/CardInfos';
import Button from '../components/Button';
import PropTypes from 'prop-types';
import { MovieContext } from '../Store';

export default function Overlay({ addToWatchList, isOnWatchList, movie }) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkWatchlist, setCheckWatchlist] = useContext(MovieContext);

  function clickHandler() {
    setIsOpen(true);
    setCheckWatchlist(isOnWatchList);
  }

  function onClose() {
    setIsOpen(false);
    setCheckWatchlist(false);
  }

  return (
    <OverlayStyler>
      <ButtonWrapper>
        <Button clickHandler={clickHandler} />
      </ButtonWrapper>
      <CardInfos
        movie={movie}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        open={isOpen}
        onClose={onClose}
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  opacity: 0;
  bottom: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
