import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import backdrop_poster from '../assets/backdrop_poster.webp';
import { Tachometer } from '@styled-icons/boxicons-regular/Tachometer';
import AddToWatchList from './AddToWatchList';
import { isMobile } from 'react-device-detect';

export default function CardInfos({
  open,
  movie,
  onClose,
  addToWatchList,
  checkOnWatchList,
}) {
  if (!open) return null;
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  const release = movie?.first_air_date || movie?.release_date;
  const noRelease =
    movie?.first_air_date === undefined && movie?.release_date === undefined;
  const noBackDropPath = movie?.backdrop_path === null;

  return ReactDom.createPortal(
    <>
      <BackgroundStyler />
      <ModalStyler>
        <Header>
          <h2>{movie?.name || movie?.title || movie?.original_name}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>
        <BackGroundWrapper
          baseUrl={baseUrl}
          noBackDropPath={noBackDropPath}
          background={movie?.backdrop_path || movie?.poster_path}
        >
          <DetailsWrapper>
            <AddToWatchList
              checkOnWatchList={checkOnWatchList}
              addToWatchList={addToWatchList}
            />
          </DetailsWrapper>
        </BackGroundWrapper>
        <TextContainer isMobile={isMobile}>
          <p>{movie?.overview}</p>
        </TextContainer>
        <TagWrapper>
          <ReleaseWrapper noRelease={noRelease} isMobile={isMobile}>
            <p>{release?.slice(0, 4)}</p>
          </ReleaseWrapper>
          <ScoreWrapper isMobile={isMobile}>
            <Score isMobile={isMobile} />
            <p>{movie?.vote_average}/10</p>
          </ScoreWrapper>
        </TagWrapper>
      </ModalStyler>
    </>,
    document.getElementById('portal')
  );
}

CardInfos.propTypes = {
  open: PropTypes.bool,
  movie: PropTypes.object,
  onClose: PropTypes.func,
  addToWatchList: PropTypes.func,
  checkOnWatchList: PropTypes.bool,
};

const BackgroundStyler = styled.div`
  background-color: var(--modal-opacity);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
`;

const ModalStyler = styled.div`
  background: var(--primary-background);
  border-radius: 10px;
  left: 50%;
  max-width: 80%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  z-index: 1000;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.8rem 0 0.8rem;
  padding: 0px 5px;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--secondary-100);
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
  outline: none;
  transition: transform 450ms;
  width: 25px;
  &:hover {
    transform: scale(1.25);
  }
`;

const BackGroundWrapper = styled.div(
  (props) => css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    background-position: center center;
    background-size: cover;
    box-shadow: var(--boxshadow);
    height: 200px;
    object-fit: contain;
    position: relative;
    background-image: ${(props) =>
      `url("${props.baseUrl}${props.background}")`};
    ${props.noBackDropPath &&
      css`
        background-image: url(${backdrop_poster});
      `}
  `
);

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 0.3rem 0.9rem;
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* height: 25px; */
  margin: 0 0 0.5rem 0.9rem;
`;

const TextContainer = styled.div`
  font-size: ${({ isMobile }) => (isMobile ? '.9rem' : '1rem')};
  padding: 0 1rem;
`;

const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  border: solid var(--secondary-100) 1px;
  border-radius: 5px;
  height: 25px;
  margin-left: 1rem;
  padding: ${({ isMobile }) => (isMobile ? '0.6rem' : '1rem 0.6rem')};
  p {
    font-size: ${({ isMobile }) => (isMobile ? '0.9rem' : '1.1rem')};
  }
`;

const Score = styled(Tachometer)`
  color: var(--secondary-100);
  width: ${({ isMobile }) => (isMobile ? '25px' : '30px')};
  margin-right: 0.5rem;
`;

const ReleaseWrapper = styled.div`
  display: ${({ noRelease }) => (noRelease ? 'none' : 'flex')};
  align-items: center;
  border: solid var(--secondary-100) 1px;
  border-radius: 5px;
  height: 25px;
  padding: ${({ isMobile }) => (isMobile ? '0.6rem' : '1rem 0.6rem')};
  p {
    font-size: ${({ isMobile }) => (isMobile ? '0.9rem' : '1.1rem')};
  }
`;
