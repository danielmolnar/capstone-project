import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import CardInfos from '../components/CardInfos';
import Button from '../components/Button';
import PropTypes from 'prop-types';
import { Context } from '../hooks/Store';

export default function Overlay({
  movieText,
  movieName,
  release,
  background,
  baseUrl,
  score,
  addToWatchList,
  isOnWatchList,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkWatchtlist, setCheckWatchlist] = useContext(Context);

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
      <Button clickHandler={clickHandler} />

      <CardInfos
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        score={score}
        baseUrl={baseUrl}
        background={background}
        release={release}
        movieText={movieText}
        movieName={movieName}
        open={isOpen}
        onClose={onClose}
      />
    </OverlayStyler>
  );
}

Overlay.propTypes = {
  movieText: PropTypes.string,
  movieName: PropTypes.string,
  release: PropTypes.string,
  background: PropTypes.string,
  baseUrl: PropTypes.string,
  score: PropTypes.number,
  addToWatchList: PropTypes.func,
  isOnWatchList: PropTypes.func,
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
