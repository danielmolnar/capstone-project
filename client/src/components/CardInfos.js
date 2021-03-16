import React from 'react';
import styled from 'styled-components/macro';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import AddButton from '../components/AddButton';

export default function CardInfos({
  open,
  onClose,
  movieText,
  movieName,
  release,
  background,
  baseUrl,
}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <BackgroundStyler></BackgroundStyler>
      <ModalStyler>
        <Header>
          <h2>{movieName}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>
        <BackGroundWrapper background={background} baseUrl={baseUrl}>
          <DetailsWrapper>
            <AddButton />
          </DetailsWrapper>
        </BackGroundWrapper>
        <TextContainer>
          <p>{movieText}</p>
        </TextContainer>
        <TagWrapper>
          <p>{release.slice(0, 4)}</p>
      
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
