import React from 'react';
import styled from 'styled-components/macro';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import AddButton from '../components/AddButton';
import AudienceScore from '../assets/Audience_score';
import flixbuddies_poster from '../images/flixbuddies_poster.png';

export default function CardInfos({
  open,
  onClose,
  movieText,
  movieName,
  release,
  backgroundStandard,
  baseUrl,
  score,
  addToWatchList,
  movie,
}) {
  if (!open) return null;

  const posterCheck = movie.poster_path;
  const backdropCheck = movie.backdrop_path;
  const check = movie.backdrop_path && movie.poster_path;

  console.log(backdropCheck);
  let background;

  // if (backdropCheck === null) {
  //   background = { flixbuddies_poster };
  // } else background = { backgroundStandard };

  return ReactDom.createPortal(
    <>
      <BackgroundStyler />
      <ModalStyler>
        <Header>
          <h2>{movieName}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>

        <BackGroundWrapper background={backgroundStandard} baseUrl={baseUrl}>
          <DetailsWrapper>
            <AddButton addToWatchList={addToWatchList} />
          </DetailsWrapper>
        </BackGroundWrapper>
        <TextContainer>
          <p>{movieText}</p>
        </TextContainer>
        <TagWrapper>
          <p>{release.slice(0, 4)}</p>
          <ScoreWrapper>
            <p>{score}/10</p>
            <CustomAudienceScore fillColor="white" />
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
  movieText: PropTypes.string,
  movieName: PropTypes.string,
  release: PropTypes.string,
  background: PropTypes.string,
  baseUrl: PropTypes.string,
  score: PropTypes.number,
  addToWatchList: PropTypes.func,
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

const BackGroundWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background-image: ${(props) => `url("${props.baseUrl}${props.background}")`};
  background-size: cover;
  background-position: center center;
  object-fit: contain;
  height: 200px;
  box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.5);
`;

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

const CustomAudienceScore = styled(AudienceScore)`
  width: 25px;
  height: 25px;
`;

const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 2rem;

  border-radius: 5px;
  height: 40px;
`;
