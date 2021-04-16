import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import backdrop_poster from '../assets/backdrop_poster.png';
import { BiTachometer } from 'react-icons/bi';
import AddToWatchList from './AddToWatchList';

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
        <TextContainer>
          <p>{movie?.overview}</p>
        </TextContainer>
        <TagWrapper>
          <ReleaseWrapper noRelease={noRelease}>
            <p>{release?.slice(0, 4)}</p>
          </ReleaseWrapper>
          <ScoreWrapper>
            <Score />
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
  justify-content: space-between;
  align-items: center;
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
    justify-content: space-between;
    align-items: flex-end;
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
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 0.3rem 0.9rem;
`;

const TagWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 25px;
  margin: 0 0 0.5rem 0.9rem;
`;

const TextContainer = styled.div`
  font-size: 0.8rem;
  line-height: 1.3;
  padding: 0 1rem;
`;

const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: solid var(--secondary-100) 1px;
  gap: 0.5rem;
  height: 25px;
  margin-left: 1rem;
  padding: 0.3rem;
  p {
    font-size: 0.8rem;
  }
`;

const Score = styled(BiTachometer)`
  color: var(--secondary-100);
`;

const ReleaseWrapper = styled.div`
  display: ${({ noRelease }) => (noRelease ? 'none' : 'flex')};
  align-items: center;
  border-radius: 5px;
  border: solid var(--secondary-100) 1px;
  height: 25px;
  padding: 0.3rem;

  p {
    font-size: 0.8rem;
  }
`;
