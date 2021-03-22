import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import CardInfos from '../components/CardInfos';
import Button from '../components/Button';
import PropTypes from 'prop-types';
import { Context } from '../Store';
import flixbuddies_poster from '../images/flixbuddies_poster.png';

export default function Overlay({
  movieText,
  movieName,
  release,
  background,
  baseUrl,
  score,
  addToWatchList,
  isOnWatchList,
  movie,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkWatchlist, setCheckWatchlist] = useContext(Context);

  function clickHandler() {
    setIsOpen(true);
    setCheckWatchlist(isOnWatchList);
  }

  function onClose() {
    setIsOpen(false);
    setCheckWatchlist(false);
  }

  if (movie.backdrop_path === null) {
    background = { flixbuddies_poster };
  } else background = { background };

  return (
    <OverlayStyler>
      <ButtonWrapper>
        <Button clickHandler={clickHandler} />
      </ButtonWrapper>
      <CardInfos
        movie={movie}
        isOnWatchList={isOnWatchList}
        addToWatchList={addToWatchList}
        score={score}
        baseUrl={baseUrl}
        backgroundStandard={background}
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
