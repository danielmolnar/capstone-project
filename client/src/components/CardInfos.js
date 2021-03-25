import React from 'react';
import styled, { css } from 'styled-components';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import AddButton from '../components/AddButton';
import FavoriteButton from '../components/FavoriteButton';

import backdrop_poster from '../images/backdrop_poster.png';

export default function CardInfos({
  open,
  onClose,
  addToWatchList,
  movie,
  isOnWatchList,
  isFavorite,
  addToFavorites,
}) {
  if (!open) return null;
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  const release = movie.first_air_date || movie.release_date;
  const existingPath =
    movie.poster_path === null && movie.backdrop_path === null;

  return ReactDom.createPortal(
    <>
      <BackgroundStyler />
      <ModalStyler>
        <Header>
          <h2>{movie?.name || movie?.title || movie?.original_name}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>
        <BackGroundWrapper
          background={movie.backdrop_path || movie.poster_path}
          existingPath={existingPath}
          baseUrl={baseUrl}
        >
          <DetailsWrapper>
            <AddButton
              addToWatchList={addToWatchList}
              isOnWatchList={isOnWatchList}
              movie={movie}
            />
          </DetailsWrapper>
          <FavoriteWrapper>
            <FavoriteButton
              movie={movie}
              isFavorite={isFavorite}
              addToFavorite={addToFavorites}
            />
          </FavoriteWrapper>
        </BackGroundWrapper>
        <TextContainer>
          <p>{movie.overview}</p>
        </TextContainer>
        <TagWrapper>
          <p>{release.slice(0, 4)}</p>
          <ScoreWrapper>
            <p>{movie.vote_average}/10</p>
          </ScoreWrapper>
        </TagWrapper>
      </ModalStyler>
    </>,
    document.getElementById('portal')
  );
}

CardInfos.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  addToWatchList: PropTypes.func,
  movie: PropTypes.object,
};

const BackgroundStyler = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const ModalStyler = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--primary-background);
  border-radius: 10px;
  z-index: 1000;
  width: 500px;
  max-width: 80%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;
  margin: 0 0.8rem 0 0.8rem;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

const CloseButton = styled.button`
  outline: none;
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform 450ms;
  font-size: 1.25rem;
  width: 25px;
  &:hover {
    transform: scale(1.25);
  }
`;

const BackGroundWrapper = styled.div(
  (props) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-size: cover;
    background-position: center center;
    object-fit: contain;
    position: relative;
    height: 200px;
    box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.5);
    background-image: ${(props) =>
      `url("${props.baseUrl}${props.background}")`};
    ${props.existingPath &&
      css`
        background-image: url(${backdrop_poster});
      `}
  `
);

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 0.3rem 0.9rem;
`;

const TagWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 25px;
  margin: 0 0 0.3rem 0.9rem;

  p {
    border: solid white 1px;
    border-radius: 5px;
    padding: 1px 3px;
    font-size: 0.8rem;
  }
`;

const TextContainer = styled.div`
  line-height: 1.3;
  font-size: 0.8rem;
  padding: 0 1rem;
`;

const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 2rem;

  border-radius: 5px;
  height: 40px;
`;

const FavoriteWrapper = styled.div`
  top: 0;
  right: 0;
  padding: 10px;
  position: absolute;
`;
